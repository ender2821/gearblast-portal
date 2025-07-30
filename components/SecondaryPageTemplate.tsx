import React, { Suspense } from "react";
import { PortableText } from "next-sanity";
import File from "../public/file.svg";
import Divider from "./Divider";
import Link from "next/link";
import VideoPlayer from "./VideoPlayer";
import LoadingSpinner from "./LoadingSpinner";
import GalleryData from "./GalleryData";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
      <section className="bg-[#131313] mt-16 lg:mt-0 pl-8 pt-8 pr-8 pb-8 relative flex justify-center overflow-hidden pageContent">
        <div className="w-full z-10 relative">
          <h1 className={`text-6xl font-bold`}>{pageData?.heroTitle}</h1>
          <h2 className="text-2xl font-semibold">{pageData?.heroSubtitle}</h2>
          <Divider />
          {pageData?.spreadsheetShareLink && (
            <a
              href={pageData?.spreadsheetShareLink}
              target="_blank"
              rel="noopener noreferrer"
              className=" bg-[#f44336] inline-block relative left-1/2 -translate-x-1/2 mb-8 text-black font-semibold px-4 py-2 rounded shadow hover:text-black hover:no-underline hover:bg-[#d32f2f] transition"
            >
              Edit Spreadsheet
            </a>
          )}
          {pageData?.spreadsheetEmbedLink && (
            <div className="relative overflow-hidden w-full pt-[56.25%] mb-8">
              <iframe
                className="absolute top-0 left-0 bottom-0 right-0 w-full h-full"
                src={pageData?.spreadsheetEmbedLink}
              ></iframe>
            </div>
          )}
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
            <div className="grid grid-cols-3 mt-12 gap-2 mb-8">
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
          {pageData?.faq?.length && pageData?.faq?.length > 0 && (
            <>
              <h2>Frequently Asked Questions</h2>
              {pageData?.faq?.map((item, i) => (
                <Accordion
                  key={i}
                  sx={{
                    backgroundColor: "#131313",
                    border: "1px solid #fff",
                    color: "#fff",
                    marginBottom: "8px",
                    "&:before": {
                      display: "none",
                    },
                    "&.Mui-expanded": {
                      margin: "0 0 8px 0",
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "#fff" }} />}
                    aria-controls={`faq-panel${i + 1}-content`}
                    id={`faq-panel${i + 1}-header`}
                    sx={{
                      backgroundColor: "#131313",
                      color: "#fff",
                      "&:hover": {
                        backgroundColor: "#1a1a1a",
                      },
                    }}
                  >
                    <span className="font-semibold text-white">
                      {item?.faqQuestion}
                    </span>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{
                      backgroundColor: "#131313",
                      color: "#fff",
                      borderTop: "1px solid #fff",
                    }}
                  >
                    <div className="text-white">
                      <PortableText value={item?.faqAnswer} />
                    </div>
                  </AccordionDetails>
                </Accordion>
              ))}
            </>
          )}
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
