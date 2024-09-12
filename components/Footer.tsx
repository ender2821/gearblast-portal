import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="lgMax:peer-has-[:checked]:hidden text-center p-6 mt-6 bg-black/60">
      <p className="m-0">
        <Link href="mailto:usa@gearblast.com" className="underline">
          usa@gearblast.com
        </Link>{" "}
        | © {new Date().getFullYear()} Gearblast:US. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
