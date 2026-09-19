import "./globals.css";

export const metadata = {
  title: "Dr. Maya Reynolds, PsyD | Therapy in Santa Monica",
  description: "Warm, grounded therapy for high-achieving adults navigating anxiety, trauma and burnout in Santa Monica, California."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
