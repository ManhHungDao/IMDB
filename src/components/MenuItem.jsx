import Link from "next/link";
import React from "react";

const MenuItem = ({ title, address, Icon }) => {
  return (
    <div>
      <Link href={address} className="hover:text-amber-600 uppercase">
        <Icon className="text-2xl sm:hidden my-2 text-sm" />
        <p className="hidden sm:inline my-2 text-sm mr-6">{title}</p>
      </Link>
    </div>
  );
};

export default MenuItem;
