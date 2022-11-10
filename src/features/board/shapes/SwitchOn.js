import React  from 'react'

export default function SwitchOn(props) {
  return (
      <svg
          xmlns="http://www.w3.org/2000/svg"
          width={200}
          height={200}
          viewBox="30 65 150 150"
          {...props}
      >
        <g
            transform="matrix(3.91848 0 0 3.4761 -219.915 -227.064)"
            stroke="#000"
            strokeWidth={0.265}
        >
          <path
              d="M64.52 107.426h13.55zm20.647.045h14.84zm-7.097-.045 6.327-1.051z"
              fill="none"
          />
          <circle
              cx={77.908}
              cy={107.426}
              r={0.484}
              fill="#00f"
              fillOpacity={0.008}
          />
          <circle
              cx={84.844}
              cy={107.426}
              r={0.484}
              fill="#00f"
              fillOpacity={0.008}
          />
          <circle
              cx={84.876}
              cy={106.345}
              r={0.484}
              fill="#00f"
              fillOpacity={0.008}
          />
        </g>
      </svg>
  )
}
