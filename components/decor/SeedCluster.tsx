type SeedClusterProps = {
  className?: string;
};

/**
 * A simple illustrative stand-in for macro photography of hạt đác
 * (translucent palm seeds). Swap the wrapping element for a real
 * <Image> once product photos are available — see README.
 */
export default function SeedCluster({ className = "" }: SeedClusterProps) {
  const seeds = [
    { cx: 60, cy: 70, r: 26 },
    { cx: 100, cy: 50, r: 22 },
    { cx: 95, cy: 95, r: 24 },
    { cx: 140, cy: 70, r: 28 },
    { cx: 145, cy: 115, r: 20 },
    { cx: 180, cy: 90, r: 24 },
    { cx: 60, cy: 115, r: 18 },
    { cx: 190, cy: 130, r: 18 },
  ];

  return (
    <svg
      viewBox="0 0 220 160"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="seedGradient" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FDFCF8" />
          <stop offset="55%" stopColor="#F1EAD6" />
          <stop offset="100%" stopColor="#D9CBA3" />
        </radialGradient>
      </defs>
      {seeds.map((s, i) => (
        <ellipse
          key={i}
          cx={s.cx}
          cy={s.cy}
          rx={s.r}
          ry={s.r * 0.86}
          fill="url(#seedGradient)"
          stroke="#C6B78E"
          strokeWidth="1"
          opacity={0.96}
        />
      ))}
    </svg>
  );
}
