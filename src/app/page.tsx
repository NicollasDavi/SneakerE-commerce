import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid grid-cols-4 gap-8">
        <Link href="/product/search">
          vai carai
        </Link>
      </div>
    </main>
  );
}
