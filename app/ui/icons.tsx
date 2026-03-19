import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function WhatsAppIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12.04 2C7.13 2 3.17 5.96 3.17 10.87c0 1.92.56 3.7 1.63 5.26L3 22l6.06-1.77a9.1 9.1 0 0 0 3 .49c4.91 0 8.87-3.96 8.87-8.87C20.93 5.96 16.97 2 12.04 2Zm0 15.77c-1.02 0-2.03-.27-2.9-.78l-.21-.12-3.59 1.05 1.08-3.5-.13-.23a6.4 6.4 0 0 1-1-3.32c0-3.58 2.92-6.49 6.5-6.49 3.58 0 6.49 2.91 6.49 6.49 0 3.58-2.91 6.5-6.49 6.5Zm3.57-4.65c-.2-.1-1.17-.58-1.35-.64-.18-.07-.31-.1-.44.1-.13.2-.51.64-.63.77-.12.13-.23.15-.43.05-.2-.1-.84-.31-1.6-.99-.59-.53-.99-1.18-1.11-1.38-.12-.2-.01-.31.09-.41.09-.09.2-.23.3-.34.1-.11.13-.2.2-.33.07-.13.04-.24-.02-.34-.06-.1-.57-1.38-.78-1.9-.2-.48-.4-.42-.54-.43h-.46c-.16 0-.41.06-.62.3-.21.23-.81.79-.81 1.93 0 1.14.83 2.24.95 2.4.12.16 1.64 2.5 4.02 3.51.56.24.99.38 1.33.49.56.18 1.07.16 1.47.1.45-.07 1.38-.56 1.58-1.1.19-.53.19-.98.13-1.07-.06-.09-.18-.14-.38-.24Z"
      />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4"
      {...props}
    >
      <path
        fill="currentColor"
        d="M8 3C5.24 3 3 5.24 3 8v8c0 2.76 2.24 5 5 5h8c2.76 0 5-2.24 5-5V8c0-2.76-2.24-5-5-5H8Zm0 2h8c1.66 0 3 1.34 3 3v8c0 1.66-1.34 3-3 3H8c-1.66 0-3-1.34-3-3V8c0-1.66 1.34-3 3-3Zm8.75 1.5a.75.75 0 0 0-.75.75v1a.75.75 0 0 0 1.5 0v-1a.75.75 0 0 0-.75-.75ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 1.8A3.2 3.2 0 1 1 8.8 12 3.2 3.2 0 0 1 12 8.8Z"
      />
    </svg>
  );
}

export function ProblemIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5"
      {...props}
    >
      <path
        fill="currentColor"
        d="M11.07 2.99a1.5 1.5 0 0 1 1.86 0l7.14 5.7A1.5 1.5 0 0 1 21 10.97H3a1.5 1.5 0 0 1-.93-2.28l7-5.7Z"
      />
      <path
        fill="currentColor"
        d="M4 11.97h16v6.51A1.5 1.5 0 0 1 18.5 20H5.5A1.5 1.5 0 0 1 4 18.48v-6.51Z"
      />
    </svg>
  );
}

export function SolutionIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 2a7 7 0 0 0-4.95 11.95L11 18.9a1.5 1.5 0 0 0 2.12 0l3.93-3.95A7 7 0 0 0 12 2Zm0 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z"
      />
    </svg>
  );
}

export function StepIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4"
      {...props}
    >
      <path
        fill="currentColor"
        d="M5 4.5A1.5 1.5 0 0 1 6.5 3h11A1.5 1.5 0 0 1 19 4.5V9h-4.5A1.5 1.5 0 0 0 13 10.5V15H6.5A1.5 1.5 0 0 1 5 13.5v-9Z"
      />
      <path
        fill="currentColor"
        d="M14.5 11H19v8.5A1.5 1.5 0 0 1 17.5 21h-9A1.5 1.5 0 0 1 7 19.5V15h4.5A3 3 0 0 0 14.5 12v-1Z"
      />
    </svg>
  );
}

