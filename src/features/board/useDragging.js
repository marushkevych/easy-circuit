import { useRef, useState, useEffect } from 'react'

export default function useDragging(initPos) {
  const [isDragging, setIsDragging] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  function onMouseDown(e) {
    if (e.button !== 0) return;
    setIsDragging(true);

    // setPos({
    //   x: e.x - ref.current.offsetWidth / 2,
    //   y: e.y - ref.current.offsetHeight / 2,
    // });

    e.stopPropagation();
    e.preventDefault();
  }

  useEffect(() => {
    if (ref.current) {
      ref.current.style.transform = `translate(${pos.x}px, ${pos.y}px)`
    }
  }, [pos])

  // When the element mounts, attach an mousedown listener
  useEffect(() => {
    const currentRef = ref.current
    currentRef.addEventListener("mousedown", onMouseDown);

    return () => {
      currentRef.removeEventListener("mousedown", onMouseDown);
    };
  }, []);

  // Everytime the isDragging state changes, assign or remove
  // the corresponding mousemove and mouseup handlers
  useEffect(() => {
    function onMouseMove(e) {
      if (!isDragging) return;

      // const rect = ref.current.getBoundingClientRect()
      // // console.log('event', e)

      setPos({
        x: e.x - ref.current.offsetWidth / 2 - initPos.x,
        y: e.y - ref.current.offsetHeight / 2 - initPos.y,
      });
      // e.stopPropagation();
      // e.preventDefault();
    }

    function onMouseUp(e) {
      setIsDragging(false);
      // e.stopPropagation();
      // e.preventDefault();
    }

    if (isDragging) {
      document.addEventListener("mouseup", onMouseUp);
      document.addEventListener("mousemove", onMouseMove);
    }
    return () => {
      if (isDragging) {
        document.removeEventListener("mouseup", onMouseUp);
        document.removeEventListener("mousemove", onMouseMove);
      }
    };
  }, [isDragging]);

  return [ref, pos, isDragging];
}