import { useEffect } from 'react'

const throttle = (f) => {
  let token = null, lastArgs = null;
  const invoke = () => {
    f(...lastArgs);
    token = null;
  };
  const result = (...args) => {
    lastArgs = args;
    if (!token) {
      token = requestAnimationFrame(invoke);
    }
  };
  result.cancel = () => token && cancelAnimationFrame(token);
  return result;
};

export default function useDragging(ref, position, onMove) {
  // coordinates of mouse-down relative to current element
  let relX = 0;
  let relY = 0;

  const onMouseMove = (event) => {
    onMove(
      event.layerX - relX,
      event.layerY - relY,
    );
    event.preventDefault();
  };

  const onMouseUp = (event) => {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
    event.preventDefault();
  };

  const onMouseDown = (event) => {
    if (event.button !== 0) {
      return;
    }

    // Try to avoid calling `getBoundingClientRect` if you know the size
    // of the moving element from the beginning. It forces reflow and is
    // the laggiest part of the code right now. Luckily it's called only
    // once per click.
    const {left, top} = ref.current.getBoundingClientRect();
    relX = event.pageX - (left + window.pageXOffset);
    relY = event.pageY - (top + window.pageYOffset);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    event.preventDefault();
  };

  const update = throttle(() => {
    const {x, y} = position;
    ref.current.style.transform = `translate(${x}px, ${y}px)`;
  });


  useEffect(() => {
    ref.current.addEventListener('mousedown', onMouseDown);
    update();
    return () => {
      ref.current.removeEventListener('mousedown', onMouseDown);
      update.cancel();
    };
  }, []);

  useEffect(() => {
    update();
  }, [position]);

}
