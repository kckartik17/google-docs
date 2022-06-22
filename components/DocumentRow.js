import { IconButton } from "@material-tailwind/react";
import { useRouter } from "next/router";
import React from "react";
import DotsIcon from "./svgs/dots.svg";
import DocsIcon from "./svgs/google-docs-icon.svg";

function DocumentRow({ id, fileName, date }) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/doc/${id}`)}
      className="flex items-center p-4 rounded-lg hover:bg-grey-100 text-grey-700 text-sm cursor-pointer">
      <DocsIcon className="text-xl" />
      <p className="flex-grow pl-5 w-10 pr-10 truncate">{fileName}</p>
      <p className="pr-5 text-sm">{date?.toDate().toLocaleDateString()}</p>
      <IconButton
        variant="text"
        className="rounded-full border-0"
        color="grey"
        ripple={true}>
        <DotsIcon className="text-xl" />
      </IconButton>
    </div>
  );
}

export default DocumentRow;
