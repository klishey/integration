import { Inter } from "next/font/google";
import "./globals.css";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import BootstrapClient from "@/component/BootstrapClient";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Integration Page",
  description: "Integration page demo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <BootstrapClient />
      </body>
    </html>
  );
}
