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

export function GlobeIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" {...props}>
      <path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm7.9 9h-3.18a15.8 15.8 0 0 0-1.08-5A8.04 8.04 0 0 1 19.9 11ZM12 4c.88 0 2.22 2.08 2.67 7H9.33c.45-4.92 1.79-7 2.67-7Zm-3.64 2a15.8 15.8 0 0 0-1.08 5H4.1a8.04 8.04 0 0 1 4.26-5ZM4.1 13h3.18a15.8 15.8 0 0 0 1.08 5 8.04 8.04 0 0 1-4.26-5Zm7.9 7c-.88 0-2.22-2.08-2.67-7h5.34c-.45 4.92-1.79 7-2.67 7Zm3.64-2a15.8 15.8 0 0 0 1.08-5h3.18a8.04 8.04 0 0 1-4.26 5Z" />
    </svg>
  );
}

export function CheckCircleIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" {...props}>
      <path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm-1.1 14.2L7.7 13l1.4-1.4 1.8 1.8 4.1-4.1 1.4 1.4Z" />
    </svg>
  );
}

export function BoltIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" {...props}>
      <path fill="currentColor" d="M13 2 4 14h6l-1 8 9-12h-6Z" />
    </svg>
  );
}

export function ChatIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" {...props}>
      <path fill="currentColor" d="M4 4h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-5 4v-4H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

export function UserIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" {...props}>
      <path fill="currentColor" d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5Z" />
    </svg>
  );
}

export function TrendUpIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" {...props}>
      <path fill="currentColor" d="M3 17h2.59l4.7-4.7 3 3L21 7.59V10h2V4h-6v2h2.59l-6.29 6.29-3-3L3 16.59Z" />
    </svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" {...props}>
      <path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 14.5 9 2.5 2.5 0 0 1 12 11.5Z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" {...props}>
      <path fill="currentColor" d="M3 6h18a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Zm0 2v.2l9 5.4 9-5.4V8l-9 5.4Z" />
    </svg>
  );
}

export function BeaconIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" {...props}>
      <path fill="currentColor" d="M11 7h2v6h-2Zm0 8h2v2h-2Zm1-13a9 9 0 0 0-6.36 2.64l1.42 1.42a7 7 0 0 1 9.88 0l1.42-1.42A9 9 0 0 0 12 2Zm0 4a5 5 0 0 0-3.54 1.46l1.42 1.42a3 3 0 0 1 4.24 0l1.42-1.42A5 5 0 0 0 12 6Z" />
    </svg>
  );
}

export function RocketIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" {...props}>
      <path fill="currentColor" d="M14 3c4 0 7 3 7 7 0 3.5-2.55 6.4-6 6.92V21l-3-2-3 2v-4.08C5.55 16.4 3 13.5 3 10c0-4 3-7 7-7h4Zm-2 4a2 2 0 1 0 2 2 2 2 0 0 0-2-2Z" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" {...props}>
      <path fill="currentColor" d="M13.17 6 11.76 7.41 15.34 11H4v2h11.34l-3.58 3.59L13.17 18 19.59 11.59 13.17 6Z" />
    </svg>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" {...props}>
      <path fill="currentColor" d="M6.94 8.5a1.56 1.56 0 1 1 0-3.12 1.56 1.56 0 0 1 0 3.12ZM5.5 9.75h2.88V19H5.5V9.75Zm4.5 0h2.76v1.26h.04c.38-.73 1.32-1.5 2.72-1.5 2.9 0 3.43 1.9 3.43 4.38V19h-2.88v-4.53c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39V19H10V9.75Z" />
    </svg>
  );
}

export function QuoteIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6" {...props}>
      <path fill="currentColor" d="M7 11h4v8H3v-8a8 8 0 0 1 8-8v3a5 5 0 0 0-4 5Zm10 0h4v8h-8v-8a8 8 0 0 1 8-8v3a5 5 0 0 0-4 5Z" />
    </svg>
  );
}

