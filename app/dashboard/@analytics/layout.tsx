"use client";
import Link from "next/link";
export default function AnalyticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav>
        <ul className="flex gap-8 items-center justify-center">
          <li>
            <Link href="/dashboard/page-views">Page Views</Link>
          </li>
          <li>
            <Link href="/dashboard/visitors">Visitors</Link>
          </li>
        </ul>
      </nav>
      <div>{children}</div>
    </>
  );
}
