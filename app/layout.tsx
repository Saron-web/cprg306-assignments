import "./globals.css";
import { AuthContextProvider } from "./contexts/autho-context";

export const metadata = {
  title: "CPRG 306 Assignments",
  description: "Student project for Week 9",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthContextProvider>{children}</AuthContextProvider>
      </body>
    </html>
  );
}
