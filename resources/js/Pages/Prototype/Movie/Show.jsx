import { Link } from "@inertiajs/react";
import ReactPlayer from "react-player";

export default function Show() {
  return (
    <section
      className="mx-auto w-screen h-screen relative watching-page font-poppins bg-form-bg"
      id="stream"
    >
      <div className="pt-[100px] px-4 md:px-8 lg:px-16 h-screen flex flex-col">
        <div className="relative flex-grow mb-8">
          <ReactPlayer
            url={"https://www.youtube.com/watch?v=kNPEGMhlRUg&t=15s"}
            controls
            width="100%"
            height="100%"
            className="absolute top-0 left-0"
            style={{ maxHeight: "calc(100vh - 180px)" }}
          />
        </div>
      </div>

      {/* Button back to dashboard */}
      <div className="absolute top-5 left-5 z-20">
        <Link href={route("prototype.dashboard")}>
          <img
            src="/assets/icons/ic_arrow-left.svg"
            className="transition-all btn-back w-[46px]"
            alt="stream"
          />
        </Link>
      </div>

      {/* Video Title  */}
      <div className="absolute title-video top-7 left-1/2 -translate-x-1/2 max-w-[310px] md:max-w-[620px] text-center">
        <span className="font-medium text-2xl transition-all text-white drop-shadow-md select-none">
          Details Screen Part Final
        </span>
      </div>
    </section>
  );
}
