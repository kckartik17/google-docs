import {
  IconButton,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import DotsIcon from "../components/svgs/dots.svg";
import FolderIcon from "../components/svgs/folder.svg";
import { getSession, useSession } from "next-auth/react";
import Login from "../components/Login";
import { Fragment, useState } from "react";

export default function Home() {
  const { data: session } = useSession();
  if (!session) return <Login />;

  const [open, setOpen] = useState(false);

  const handleOpen = (value) => {
    setOpen(!open);
    setInputValue("");
  };
  const [inputValue, setInputValue] = useState("");

  const createDocument = () => {};

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
            <Fragment>
              <div
                onClick={handleOpen}
                className="relative h-52 w-40 border-2 cursor-pointer border-transparent hover:border-blue-700">
                <Image
                  src="https://ssl.gstatic.com/docs/templates/thumbnails/docs-blank-googlecolors.png"
                  layout="fill"></Image>
              </div>
              <Dialog open={open} handler={handleOpen}>
                <DialogHeader>Create a new document</DialogHeader>
                <DialogBody>
                  <Input
                    label="Name"
                    onKeyDown={(e) => e.key === "Enter" && createDocument()}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                </DialogBody>
                <DialogFooter>
                  <Button
                    variant="text"
                    color="red"
                    onClick={handleOpen}
                    className="mr-1">
                    <span>Cancel</span>
                  </Button>
                  <Button
                    variant="gradient"
                    color="blue"
                    onClick={createDocument}>
                    <span>Create</span>
                  </Button>
                </DialogFooter>
              </Dialog>
            </Fragment>
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

export async function getServerSideProps(context) {
  return {
    props: {
      session: await getSession(context),
    },
  };
}
