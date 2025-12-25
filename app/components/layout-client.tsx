"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Navigation from "./Navigation";
import Footer from "./Footer";

export default function LayoutClient({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  useEffect(() => {
    // Reset scroll position to top on route change
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

