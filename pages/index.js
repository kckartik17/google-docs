import { IconButton } from "@material-tailwind/react";
import Head from "next/head";
import Header from "../components/Header";
import DotsIcon from "../components/svgs/dots.svg";

export default function Home() {
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
        </div>
      </section>
    </div>
  );
}
