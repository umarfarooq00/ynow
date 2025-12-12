"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [megaOpen, setMegaOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        megaOpen ? "no_radius" : "with_radius"
      }`}
    >
      <div className="container relative max-w-7xl mx-auto flex items-center justify-between py-4 px-4">

        {/* LOGO */}
        <Link href="/" className="text-2xl font-bold">
          logo
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex gap-8 text-black font-medium">

          <Link href="/">Home</Link>

          {/* MEGA MENU */}
          <div
            className="group"
            onMouseEnter={() => setMegaOpen(true)}
            onMouseLeave={() => setMegaOpen(false)}
          >
            <button className="flex items-center gap-1">
              Products ▼
            </button>

            {/* Full Width Mega Menu */}
            <div
              className={`absolute left-0 top-full w-full bg-white shadow-xl py-6 px-8 flex transition-all ${
                megaOpen ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              {/* LEFT SIDE: Categories & Links */}
              <div className="space-y-6 pr-8 border-r border-gray-200">
                <div>
                  <h4 className="font-semibold mb-2">Hearing Aids</h4>
                  <ul className="space-y-1 text-sm">
                    <li>
                      <Link href="/products/basic" className="hover:text-blue-600">
                        Basic Hearing Aid
                      </Link>
                    </li>
                    <li>
                      <Link href="/products/pro" className="hover:text-blue-600">
                        Pro Hearing Aid
                      </Link>
                    </li>
                    <li>
                      <Link href="/products/premium" className="hover:text-blue-600">
                        Premium Edition
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Accessories</h4>
                  <ul className="space-y-1 text-sm">
                    <li>
                      <Link href="/accessories/batteries" className="hover:text-blue-600">
                        Batteries
                      </Link>
                    </li>
                    <li>
                      <Link href="/accessories/cleaning" className="hover:text-blue-600">
                        Cleaning Kit
                      </Link>
                    </li>
                    <li>
                      <Link href="/accessories/filters" className="hover:text-blue-600">
                        Ear Filters
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Support</h4>
                  <ul className="space-y-1 text-sm">
                    <li>
                      <Link href="/support/warranty" className="hover:text-blue-600">
                        Warranty
                      </Link>
                    </li>
                    <li>
                      <Link href="/support/manuals" className="hover:text-blue-600">
                        User Manuals
                      </Link>
                    </li>
                    <li>
                      <Link href="/support/faq" className="hover:text-blue-600">
                        FAQ
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* RIGHT SIDE: Cards */}
              <div className="flex-1 grid grid-cols-3 gap-4 pl-8">
                <Link href="/products/basic" className="border rounded-lg overflow-hidden hover:shadow-lg transition">
                  <img src="/images/basic.jpg" alt="Basic Hearing Aid" className="w-full h-32 object-cover" />
                  <div className="p-2">
                    <h5 className="font-semibold">Basic Hearing Aid</h5>
                    <p className="text-sm text-gray-600">Affordable and reliable hearing aid for everyday use.</p>
                  </div>
                </Link>

                <Link href="/products/pro" className="border rounded-lg overflow-hidden hover:shadow-lg transition">
                  <img src="/images/pro.jpg" alt="Pro Hearing Aid" className="w-full h-32 object-cover" />
                  <div className="p-2">
                    <h5 className="font-semibold">Pro Hearing Aid</h5>
                    <p className="text-sm text-gray-600">Advanced features for professional-level hearing support.</p>
                  </div>
                </Link>

                <Link href="/products/premium" className="border rounded-lg overflow-hidden hover:shadow-lg transition">
                  <img src="/images/premium.jpg" alt="Premium Edition" className="w-full h-32 object-cover" />
                  <div className="p-2">
                    <h5 className="font-semibold">Premium Edition</h5>
                    <p className="text-sm text-gray-600">High-end hearing aid with top-notch technology.</p>
                  </div>
                </Link>

                <Link href="/accessories/batteries" className="border rounded-lg overflow-hidden hover:shadow-lg transition">
                  <img src="/images/batteries.jpg" alt="Batteries" className="w-full h-32 object-cover" />
                  <div className="p-2">
                    <h5 className="font-semibold">Batteries</h5>
                    <p className="text-sm text-gray-600">Long-lasting batteries for all your hearing aids.</p>
                  </div>
                </Link>

                <Link href="/accessories/batteries" className="border rounded-lg overflow-hidden hover:shadow-lg transition">
                  <img src="/images/batteries.jpg" alt="Batteries" className="w-full h-32 object-cover" />
                  <div className="p-2">
                    <h5 className="font-semibold">Batteries</h5>
                    <p className="text-sm text-gray-600">Long-lasting batteries for all your hearing aids.</p>
                  </div>
                </Link>

                <Link href="/accessories/batteries" className="border rounded-lg overflow-hidden hover:shadow-lg transition">
                  <img src="/images/batteries.jpg" alt="Batteries" className="w-full h-32 object-cover" />
                  <div className="p-2">
                    <h5 className="font-semibold">Batteries</h5>
                    <p className="text-sm text-gray-600">Long-lasting batteries for all your hearing aids.</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* MOBILE BUTTON */}
        <button className="md:hidden text-3xl">☰</button>
      </div>
    </header>
  );
}
