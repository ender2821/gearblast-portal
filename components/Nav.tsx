import { client, revalidate } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Link from "next/link";
import React from "react";
import Menu from "@/public/menu.svg";
import Close from "@/public/close.svg";

const navQuery = groq`
  *[_type == "volunteerPage"]{
    name,
    slug
  }
  `;

type NavItem = {
  name: string;
  slug: {
    current: string;
  };
};

const dataFetch = async (query: string) => {
  return await client.fetch<NavItem[]>(
    query,
    {},
    { next: { revalidate: revalidate } }
  );
};

export default async function Nav() {
  const navQueryData = await dataFetch(navQuery);
  return (
    <>
      <input
        type="checkbox"
        id="drawer-toggle"
        name="drawer-toggle"
        className="peer absolute opacity-0"
      />
      <label
        htmlFor="drawer-toggle"
        id="drawer-toggle-label"
        className="w-16 h-16 lgMax:peer-[:checked]:hidden lock left-0 absolute z-30 lg:hidden cursor-pointer flex items-center justify-center"
      >
        <Menu className="w-[50%] h-[50%]" />
      </label>
      <label
        htmlFor="drawer-toggle"
        id="drawer-toggle-label"
        className="w-16 h-16 lgMax:peer-[:checked]:flex hidden right-0 absolute z-30 lg:hidden cursor-pointer items-center justify-center"
      >
        <Close className="w-[50%] h-[50%]" />
      </label>
      <nav className="w-[100vw] lg:w-full absolute lg:left-0 -left-[100vw] lg:top-0 smDesktop:pl-24 smDesktop:pr-24 bg-[#131313] lgMax:backdrop-blur-xl z-20 lgMax:peer-[:checked]:left-0">
        <ul className="lg:flex">
          <li>
            <Link href="/" className="pt-4 pr-8 pb-4 pl-8 block">
              Home
            </Link>
          </li>
          {navQueryData.map((item: NavItem, i: number) => (
            <li key={item?.name + i} className="lg:[&>a]:last:pb-6">
              <Link
                href={`/${item?.slug?.current}`}
                className="pt-4 pr-8 pb-4 pl-8 block"
              >
                {item?.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
