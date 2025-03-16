'use client';

import Link from 'next/link';

export default function ThankYou() {
  return (
    <div className="container mt-5 text-center">
      <h2>Thank You!</h2>
      <p>Your contact has been submitted successfully.</p>
      <Link href="/" className="btn btn-primary">
        OK
      </Link>
    </div>
  );
}