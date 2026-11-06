import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "devicon/devicon.min.css";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Taylor Henrique | Portfólio",
  description: "Portfólio digital de Taylor Henrique.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col pb-16">
        {children}
        <footer className="fixed inset-x-0 bottom-0 z-50 border-t border-white/[0.08] bg-[#080808]/90 px-6 py-3 backdrop-blur-md">
          <nav
            aria-label="Redes sociais"
            className="flex items-center justify-center gap-6"
          >
            <a
              href="https://www.instagram.com/taylor.henrique.353/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram (abre em nova aba)"
              className="p-1 text-white/45 transition-colors hover:text-[#d34a3d] focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#d34a3d]"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-[22px] w-[22px]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href="https://github.com/TaylorSilva2"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub (abre em nova aba)"
              className="p-1 text-white/45 transition-colors hover:text-[#d34a3d] focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#d34a3d]"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-[22px] w-[22px]"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.28-1.24-1.62-1.24-1.62-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15 1 1.7 2.61 1.21 3.25.92.1-.72.39-1.21.71-1.49-2.48-.28-5.09-1.24-5.09-5.53 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.3-2.61 5.24-5.1 5.52.4.35.76 1.03.76 2.08v3.08c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/taylor-silva-859300330"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn (abre em nova aba)"
              className="p-1 text-white/45 transition-colors hover:text-[#d34a3d] focus-visible:outline focus-visible:outline-1 focus-visible:outline-[#d34a3d]"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-[22px] w-[22px]"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.85 0 1.55-.68 1.55-1.52V3.52c0-.84-.7-1.52-1.55-1.52ZM7.93 18.45H4.97V9h2.96v9.45ZM6.45 7.71a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12 10.74H15.5v-4.6c0-1.1-.02-2.51-1.53-2.51-1.53 0-1.76 1.2-1.76 2.43v4.68H9.25V9h2.84v1.29h.04c.4-.74 1.36-1.52 2.8-1.52 2.99 0 3.54 1.97 3.54 4.53v5.15Z" />
              </svg>
            </a>
          </nav>
        </footer>
      </body>
    </html>
  );
}
