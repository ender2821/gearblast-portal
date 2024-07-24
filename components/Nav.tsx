import React from "react";
import Link from "next/link";

export default async function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/home">
            <Link href="#">Home</Link>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <Link href="#">About</Link>
          </Link>
        </li>
        <li>
          <Link href="/products">
            <Link href="#">Products</Link>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <Link href="#">Contact</Link>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
