export const iconPaths = {
  flask: (
    <>
      <path d="M9 3v6.5L4.5 19a2 2 0 0 0 1.8 3h11.4a2 2 0 0 0 1.8-3L15 9.5V3" />
      <path d="M9 3h6" />
      <path d="M7 14h10" />
    </>
  ),
  dna: (
    <>
      <path d="M6 3c6 6 6 12 0 18" />
      <path d="M18 3c-6 6-6 12 0 18" />
      <path d="M6 9h12" />
      <path d="M6 15h12" />
    </>
  ),
  filter: (
    <>
      <path d="M3 5h18l-7 9v5l-4-2v-3L3 5z" />
      <path d="M3 5l9 9" />
    </>
  ),
  shield: (
    <>
      <path d="M12 2l8 3v6c0 5-3.5 9.5-8 11-4.5-1.5-8-6-8-11V5l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  delivery: (
    <>
      <path d="M3 7h11v9H3z" />
      <path d="M14 10h4l3 3v3h-7" />
      <circle cx="7" cy="19" r="1.6" />
      <circle cx="17" cy="19" r="1.6" />
    </>
  ),
  network: (
    <>
      <circle cx="5" cy="12" r="2.4" />
      <circle cx="19" cy="5" r="2.4" />
      <circle cx="19" cy="19" r="2.4" />
      <path d="M7.2 10.8l9.6-4.6" />
      <path d="M7.2 13.2l9.6 4.6" />
    </>
  ),
  contract: (
    <>
      <path d="M6 3h8l4 4v14H6V3z" />
      <path d="M14 3v4h4" />
      <path d="M9 12h6" />
      <path d="M9 16h6" />
    </>
  ),
  bolt: (
    <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
  ),
  check: <path d="M20 6L9 17l-5-5" />,
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </>
  ),
  phone: (
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.6 2z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
  pin: (
    <>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
  chevronLeft: <path d="M15 6l-6 6 6 6" />,
  chevronRight: <path d="M9 6l6 6-6 6" />,
  quote: (
    <path d="M7.5 6C5 6 3 8 3 10.5S5 15 7.5 15c.3 0 .6 0 .9-.1-.8 2-2.7 3.4-4.9 3.4v2c4 0 7.5-3.5 7.5-8V11C11 8 9.5 6 7.5 6zm9 0C14 6 12 8 12 10.5S14 15 16.5 15c.3 0 .6 0 .9-.1-.8 2-2.7 3.4-4.9 3.4v2c4 0 7.5-3.5 7.5-8V11C20 8 18.5 6 16.5 6z" />
  ),
  linkedin: (
    <>
      <path d="M4 4h16v16H4z" />
      <path d="M8 11v5" />
      <path d="M8 8v.01" />
      <path d="M12 16v-5" />
      <path d="M16 16v-3a2 2 0 0 0-4 0" />
    </>
  ),
  twitter: (
    <path d="M4 4l7.2 9.3L4.4 20h2.2l5.7-5.5L16.6 20H20l-7.5-9.7L18.8 4h-2.2l-5.1 5L6.4 4H4z" />
  ),
  facebook: (
    <path d="M14 8h3V5h-3a4 4 0 0 0-4 4v3H7v3h3v7h3v-7h3l1-3h-4V9a1 1 0 0 1 1-1z" />
  ),
};

export function Icon({ name, size = 20, className = "", label }) {
  return (
    <svg
      aria-hidden={label ? undefined : "true"}
      aria-label={label}
      role={label ? "img" : undefined}
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {iconPaths[name]}
    </svg>
  );
}