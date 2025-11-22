import type { Metadata } from "next";
import "./globals.css";
import { Noto_Naskh_Arabic } from "next/font/google";
import Link from "next/link";

const noto = Noto_Naskh_Arabic({ subsets: ["arabic"], variable: "--font-ar" });

export const metadata: Metadata = {
  metadataBase: new URL("https://agentic-a6d92836.vercel.app"),
  title: "???? ????? ??????? ? ???????",
  description: "???? ????? ?????????? ???????? ?? ?????. ??? ?????? ?????? ?????? ???????? ????????.",
  applicationName: "??????",
  icons: { icon: "/logo.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar-DZ" dir="rtl" className={noto.variable}>
      <body className="min-h-screen flex flex-col">
        <header className="border-b bg-white/70 backdrop-blur sticky top-0 z-50">
          <nav className="container-ar flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2 group">
              <img src="/logo.svg" alt="??????" className="h-7 w-7" />
              <span className="font-extrabold text-lg tracking-tight group-hover:text-primary-700">??????</span>
            </Link>
            <div className="flex items-center gap-2">
              <Link href="#???????" className="btn-outline">???????</Link>
              <Link href="/????-??????" className="btn-primary">???? ????</Link>
            </div>
          </nav>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="border-t mt-16">
          <div className="container-ar py-8 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>? {new Date().getFullYear()} ?????? ? ???????</p>
            <div className="flex items-center gap-4">
              <Link href="#???????" className="hover:text-gray-900">???????</Link>
              <Link href="/????-??????" className="hover:text-gray-900">???? ??????</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
