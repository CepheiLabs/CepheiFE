export const cepheiTheme = {
  colors: {
    background: "#141721",
    surface: "#161A26",
    surfaceMuted: "#202637",
    surfaceRaised: "#252C3F",
    foreground: "#E3E6ED",
    mutedForeground: "#C7CBD6",
    brandTeal: "#4FD1C5",
    actionGold: "#C9A24D",
    actionGoldHover: "#B8903E",
    systemBlue: "#4DA3FF",
    success: "#4FD1C5",
    warning: "#F2C94C",
    danger: "#F97066",
    border: "rgba(77, 163, 255, 0.20)",
    overlay: "rgba(8, 10, 16, 0.72)",
  },
  fonts: {
    logo: "'Advent Pro', sans-serif",
    heading: "'Work Sans', sans-serif",
    body: "'Space Grotesk', sans-serif",
    control: "'Inter', sans-serif",
    mono: "'Roboto Mono', monospace",
  },
  radii: {
    xs: "4px",
    sm: "6px",
    md: "8px",
    lg: "12px",
    xl: "16px",
  },
  shadow: {
    focus: "0 0 0 3px rgba(77, 163, 255, 0.35)",
    raised: "0 18px 60px rgba(0, 0, 0, 0.32)",
  },
} as const;

export type CepheiTheme = typeof cepheiTheme;
