export function HikingArt({ id }: { id: string }) {
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1a3358" />
          <stop offset="1" stopColor="#0d1b30" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill={`url(#${id})`} />
      <path
        d="M0,260 L60,180 L110,220 L160,140 L210,200 L260,150 L320,210 L400,170 L400,300 L0,300 Z"
        fill="rgba(90,143,214,0.15)"
        stroke="rgba(90,143,214,0.4)"
        strokeWidth="0.5"
      />
      <path
        d="M0,280 L80,230 L140,255 L200,210 L260,240 L320,215 L400,245 L400,300 L0,300 Z"
        fill="rgba(90,143,214,0.25)"
        stroke="rgba(90,143,214,0.5)"
        strokeWidth="0.5"
      />
      <g fill="none" stroke="rgba(180, 205, 240, 0.25)" strokeWidth="0.5">
        <path d="M0,90 Q100,75 200,85 T400,80" />
        <path d="M0,110 Q100,95 200,105 T400,100" />
        <path d="M0,130 Q100,115 200,125 T400,120" />
      </g>
      <circle cx="320" cy="60" r="20" fill="rgba(212,165,116,0.4)" />
      <circle cx="320" cy="60" r="14" fill="rgba(212,165,116,0.2)" />
    </svg>
  )
}

export function CyclingArt({ id }: { id: string }) {
  return (
    <svg viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0e2440" />
          <stop offset="1" stopColor="#0a1628" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill={`url(#${id})`} />
      <path
        d="M0,200 Q40,180 70,170 T130,140 T200,100 T260,130 T320,90 T400,110 L400,300 L0,300 Z"
        fill="rgba(90,143,214,0.12)"
        stroke="rgba(90,143,214,0.45)"
        strokeWidth="0.7"
      />
      <g stroke="rgba(180,205,240,0.06)" strokeWidth="0.5">
        <line x1="0" y1="60" x2="400" y2="60" />
        <line x1="0" y1="120" x2="400" y2="120" />
        <line x1="0" y1="180" x2="400" y2="180" />
        <line x1="0" y1="240" x2="400" y2="240" />
        <line x1="80" y1="0" x2="80" y2="300" />
        <line x1="160" y1="0" x2="160" y2="300" />
        <line x1="240" y1="0" x2="240" y2="300" />
        <line x1="320" y1="0" x2="320" y2="300" />
      </g>
      <path
        d="M0,200 Q40,180 70,170 T130,140 T200,100 T260,130 T320,90 T400,110"
        fill="none"
        stroke="#d4a574"
        strokeWidth="1.5"
        strokeDasharray="3,3"
      />
      <circle cx="200" cy="100" r="3" fill="#d4a574" />
      <circle cx="320" cy="90" r="3" fill="#d4a574" />
    </svg>
  )
}
