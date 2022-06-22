import React from "react";
import { getSession, useSession } from "next-auth/react";
import Login from "../../components/Login";
import DocsIcon from "../../components/svgs/google-docs-icon.svg";
import LeftArrow from "../../components/svgs/left-arrow.svg";
import { useRouter } from "next/router";
import { IconButton } from "@material-tailwind/react";
import { useDocumentOnce } from "react-firebase-hooks/firestore";
import { doc } from "firebase/firestore";
import { db } from "../../firebase";

function Doc() {
  const { data: session } = useSession();
  if (!session) return <Login />;
  const router = useRouter();

  const { id } = router.query;
  const [snapshot, loading, error, reload] = useDocumentOnce(
    doc(db, "userDocs", session.user.email, "docs", id)
  );

  if (!loading && !snapshot?.data()?.fileName) router.replace("/");

  return (
    <div>
      <header className="flex justify-between items-center p-3 pb-1">
        <IconButton
          onClick={() => router.push("/")}
          variant="text"
          color="grey"
          ripple={true}
          className="rounded-full">
          <LeftArrow className="text-sm" />
        </IconButton>
        <DocsIcon className="text-3xl" />
        <div className="flex-grow px-2">
          <h2>{snapshot?.data()?.fileName}</h2>
          <div className="flex items-center text-sm space-x-1 ml-1 h-8 text-grey-600">
            <p className="option">File</p>
            <p className="option">Edit</p>
            <p className="option">View</p>
            <p className="option">Insert</p>
            <p className="option">Format</p>
            <p className="option">Tools</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Doc;
