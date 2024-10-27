import "./globals.css";

export const metadata = {
  title: "Farm",
  description: "Farm landing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
