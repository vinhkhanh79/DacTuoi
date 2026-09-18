type BlobProps = {
  className?: string;
  color?: string;
};

/** A soft organic blob shape used as a background accent behind imagery. */
export default function Blob({ className = "", color = "#E3EBD8" }: BlobProps) {
  return (
    <svg
      viewBox="0 0 500 500"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        fill={color}
        d="M420.5 120.5C466 176 480 254 452 322C424 390 354 448 278 458C202 468 120 430 76 366C32 302 26 212 68 148C110 84 190 46 264 42C338 38 375 65 420.5 120.5Z"
      />
    </svg>
  );
}
