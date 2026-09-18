type LeafProps = {
  className?: string;
  color?: string;
};

/** A single stylized tropical leaf silhouette, used as ambient decoration. */
export default function Leaf({ className = "", color = "#5E8A42" }: LeafProps) {
  return (
    <svg
      viewBox="0 0 120 220"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M60 4C88 34 112 78 108 124C104 172 78 208 60 216C42 208 16 172 12 124C8 78 32 34 60 4Z"
        fill={color}
        fillOpacity="0.9"
      />
      <path
        d="M60 14V206"
        stroke="#182813"
        strokeOpacity="0.25"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M60 40C50 52 38 62 28 66M60 70C50 82 38 92 26 96M60 100C50 112 38 122 24 126M60 130C50 142 38 152 26 156M60 40C70 52 82 62 92 66M60 70C70 82 82 92 94 96M60 100C70 112 82 122 96 126M60 130C70 142 82 152 94 156"
        stroke="#182813"
        strokeOpacity="0.18"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
