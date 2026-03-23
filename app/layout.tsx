import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Sonali Mittal | Frontend Developer | Freelancer",
  description: "Hi, I’m Sonali Mittal, a Lead Frontend Developer with 10+ years of experience @  Morgan Stanley Angular 19 | ReactJS | Nodejs | Typescript | Javascript(Es6+) | Tailwind |Docker | Git | CI/CD | Agile | Scrum | Team Leadership | Mentoring | Code Reviews | Performance Optimization | UI/UX Collaboration | Cross-functional Teamwork | Problem Solving | Communication Skills",
  keywords:"Sonali's portfolio Lead Technical, 10+ year's @  Morgan Stanley Angular 2 - 17 | ReactJS | Vuejs | Nodejs | Typescript | Javascript(Es6+) | Jasmine | SASS | LESS | Tailwind CSS | Webpack | Git | CI/CD | Agile | Scrum | Team Leadership | Mentoring | Code Reviews | Performance Optimization | UI/UX Collaboration | Cross-functional Teamwork | Problem Solving | Communication Skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
