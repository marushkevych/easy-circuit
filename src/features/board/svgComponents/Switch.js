import React  from 'react'

export default function Switch(props) {
  return (
      <svg
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="200"
          viewBox="30 65 150 150"
          {...props}
      >
        <g
            transform="matrix(3.91848 0 0 3.4761 -219.915 -227.064)"
            stroke="#000"
            strokeWidth={0.265}
        >
          <path
              d="M64.52 107.426h13.55zM78.07 107.426v0s0 0 0 0zM85.167 107.471h14.84zM78.07 107.426l5.806-5.161z"
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
              cx={84.199}
              cy={101.942}
              r={0.484}
              fill="#00f"
              fillOpacity={0.008}
          />
        </g>
      </svg>
  )
}
