import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const calSans = localFont({
  src: "../public/fonts/CalSans-SemiBold.woff2",
});

export const inter = Inter({ subsets: ["latin"] });
