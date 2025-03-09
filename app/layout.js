import "./globals.css";
import Providers from "./context/Providers";
import DashboardSidebar from "../components/DashboardSidebar"
import { poppins } from "./fonts"

export const metadata = {
  title: "AI Job Match Dashboard",
  description: "Find jobs that match your skills",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} box-border bg-white antialiased flex flex-col md:flex-row h-full md:h-screen`}>
        <Providers>
          <DashboardSidebar />
          <main className="w-full">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
