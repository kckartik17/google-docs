import { IconButton } from "@material-tailwind/react";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import DotsIcon from "../components/svgs/dots.svg";
import FolderIcon from "../components/svgs/folder.svg";
import { useSession } from "next-auth/react";
import Login from "../components/Login";

export default function Home() {
  const { data: session } = useSession();
  if (!session) return <Login />;
  return (
    <div>
      <Head>
        <title>Google Docs Clone</title>
      </Head>
      <Header />
      <section className="bg-[#F8F9FA] pb-10 px-10">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between py-6">
            <h2 className="text-grey-700 text-lg">Start a new document</h2>
            <IconButton
              variant="text"
              className="rounded-full border-0"
              color="grey"
              ripple={true}>
              <DotsIcon className="text-xl" />
            </IconButton>
          </div>
          <div>
            <div className="relative h-52 w-40 border-2 cursor-pointer border-transparent hover:border-blue-700">
              <Image
                src="https://ssl.gstatic.com/docs/templates/thumbnails/docs-blank-googlecolors.png"
                layout="fill"></Image>
            </div>
            <p className="ml-2 mt-2 font-semibold text-sm text-grey-700">
              Blank
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white px-10 md:px-0">
        <div className="max-w-3xl mx-auto py-8 text-sm text-grey-700">
          <div className="flex items-center justify-between pb-5">
            <h2 className="font-medium flex-grow">My Documents</h2>
            <p className="mr-12">Date Created</p>
            <FolderIcon className="text-xl text-grey-600" />
          </div>
        </div>
      </section>
    </div>
  );
}
