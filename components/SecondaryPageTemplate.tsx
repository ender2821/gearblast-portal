import React, { Suspense } from "react";
import { Noto_Serif_Display } from "next/font/google";
import { PortableText } from "next-sanity";
import Flower from "../public/flower.svg";
import File from "../public/file.svg";
import Divider from "./Divider";
import Link from "next/link";
import VideoPlayer from "./VideoPlayer";
import LoadingSpinner from "./LoadingSpinner";
import GalleryData from "./GalleryData";

const notoSerifDisplay = Noto_Serif_Display({ subsets: ["latin"] });

type Props = {
  pageData: SecondaryPageData;
  galleryQuery: string;
  slug: string;
};

export default async function SecondaryPageTemplate({
  pageData,
  galleryQuery,
  slug,
}: Props) {
  return (
    <main className="min-h-screen flex-col md:pl-24 md:pt-24 md:pr-24 pb-24 grid grid-cols-1 smDesktop:grid-cols-2 lg:grid-cols-2 gap-y-4 md:gap-4 lgMax:peer-has-[:checked]:fixed">
      <section className="bg-[#131313] pl-8 pt-8 pr-8 pb-8 relative flex justify-center overflow-hidden pageContent">
        <div className="w-full z-10 relative">
          <h1 className={`text-6xl font-bold`}>{pageData?.heroTitle}</h1>
          <h2 className="text-2xl font-semibold">{pageData?.heroSubtitle}</h2>
          <Divider />
          <a
            href="https://1drv.ms/x/c/05e9a456f5860aca/EcoKhvVWpOkggAUKaAAAAAAB4kVYg5NHWWtTeZygdO49oQ?e=uwCism"
            target="_blank"
            rel="noopener noreferrer"
            className=" bg-[#f44336] inline-block relative left-1/2 -translate-x-1/2 mb-8 text-black font-semibold px-4 py-2 rounded shadow hover:text-black hover:no-underline hover:bg-[#d32f2f] transition"
          >
            Edit Spreadsheet
          </a>
          <div className="relative overflow-hidden w-full pt-[56.25%]">
            <iframe
              className="absolute top-0 left-0 bottom-0 right-0 w-full h-full"
              src="https://1drv.ms/x/c/05e9a456f5860aca/IQTKCob1VqTpIIAFCmgAAAAAATcVtCMvtaKNPAN-8KJhjlA?wdInConfigurator=True&wdInConfigurator=True"
            ></iframe>
          </div>
          {pageData?.content && <PortableText value={pageData?.content} />}
          {pageData?.videos &&
            pageData?.videos.map((video, i) => (
              <VideoPlayer
                videoLink={video?.videoLink}
                title={video?.title}
                key={video?.title ? video?.title + i : i}
              />
            ))}
          {pageData?.files && (
            <div className="grid grid-cols-3 mt-12 gap-2">
              {pageData?.files.map((file, i) => (
                <Link
                  href={file?.fileUrl}
                  key={file?.name ? file?.name + i : i}
                  target="_blank"
                  className="border-[1px] text-center p-2 flex flex-wrap justify-center items-center [&>svg]:hover:text-[#f44336] [&>svg]:focus:text-[#f44336] border-[#5f6368] hover:border-[#f44336] focus:border-[#f44336] text-[#5f6368] hover:text-[#f44336] focus:text-[#f44336]"
                >
                  <File className="w-full h-12 text-[#5f6368]" />
                  {file?.name}
                </Link>
              ))}
            </div>
          )}
          <h2>Frequently Asked Questions</h2>
        </div>
      </section>
      <section className="relative">
        <Suspense fallback={<LoadingSpinner />}>
          <GalleryData query={galleryQuery} slug={slug} />
        </Suspense>
      </section>
    </main>
  );
}
