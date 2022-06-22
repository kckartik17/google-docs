import { Button } from "@material-tailwind/react";
import React from "react";
import DocsIcon from "./svgs/google-docs-icon.svg";
import MenuIcon from "./svgs/menu.svg";
import SearchIcon from "./svgs/search.svg";
import AppDrawer from "./svgs/app-drawer.svg";
import { signOut, useSession } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();

  return (
    <header className="sticky top-0 z-50 flex items-center px-4 py-2 shadow-md bg-white">
      <Button
        variant="text"
        className="rounded-full border-0"
        ripple={true}
        color="grey">
        <MenuIcon className="text-2xl text-grey-600" />
      </Button>
      <DocsIcon className="text-3xl" />
      <h1 className="hidden md:inline-flex ml-2 text-grey-700 text-2xl">
        Docs
      </h1>
      <div className="mx-5 md:mx-20 flex flex-grow items-center px-5 py-2 bg-grey-100 text-grey-600 rounded-lg focus-within:text-grey-600 focus-within:shadow-md">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search"
          className="flex-grow px-5 text-base bg-transparent outline-none"></input>
      </div>
      <Button
        variant="text"
        color="grey"
        className="hidden md:inline-flex ml-5 md:ml-20 rounded-full border-0"
        ripple={true}>
        <AppDrawer className="text-2xl text-grey-600" />
      </Button>
      <img
        onClick={signOut}
        className="hidden md:inline-flex cursor-pointer h-12 w-12 rounded-full ml-2"
        loading="lazy"
        alt="picture"
        src={session?.user?.image}></img>
    </header>
  );
}
