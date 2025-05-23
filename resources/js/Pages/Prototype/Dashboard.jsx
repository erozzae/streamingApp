import Authenticated from "@/Layouts/Authenticated/Index";
import Flickity from "react-flickity-component";
import { Head, Link } from "@inertiajs/react";
import FeaturedMovie from "@/Components/FeaturedMovie";
import MovieCard from "@/Components/MovieCard";

export default function Dashboard() {
  const FlickityOptions = {
    cellAlign: "left",
    contain: true,
    groupCells: 1,
    wrapAround: false,
    pageDots: false,
    prevNextButtons: false,
    draggable: ">1",
  };

  return (
    <Authenticated>
      <Head title="Dashboard">
        <link
          rel="stylesheet"
          href="https://unpkg.com/flickity@2/dist/flickity.min.css"
        />
      </Head>
      {/* START : Featured Movie */}
      <div>
        <div className="font-semibold text-[22px] text-black mb-4">
          Featured Movies
        </div>
        {/* Tambahkan div dengan overflow-hidden untuk membatasi carousel */}
        <div className="overflow-hidden">
          <Flickity classNameName="gap-[30px]" options={FlickityOptions}>
            {[1, 2, 3, 4].map((item, i) => (
              <FeaturedMovie
                key={i}
                slug={"the-batman-in-love"}
                name={`The Batman In Love ${i}`}
                category={"Comedy"}
                thumbnail={`/assets/images/featured-1.png`}
                rating={3 + i}
              />
            ))}
          </Flickity>
        </div>
      </div>
      {/* END : Featured Movie */}

      {/* START: Browse */}
      <div className="mt-[50px]">
        <div className="font-semibold text-[22px] text-black mb-4">Browse</div>
        <Flickity classNameName="gap-[30px]" options={FlickityOptions}>
          {[1, 2, 3, 4].map((item, i) => (
            // <div key={i} className="relative group overflow-hidden mr-[30px]">
            //   <img
            //     src="/assets/images/browse-1.png"
            //     className="object-cover rounded-[30px] h-[340px] w-[250px]"
            //     alt=""
            //   />
            //   <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black rounded-bl-[28px] rounded-br-[28px]">
            //     <div className="px-7 pb-7">
            //       <div className="font-medium text-xl text-white">
            //         Meong Golden
            //       </div>
            //       <p className="mb-0 text-gray-300 text-base mt-[10px]">
            //         Horror • Love
            //       </p>
            //     </div>
            //   </div>
            //   <div
            //     className="absolute top-1/2 left-1/2 -translate-y-[500px] group-hover:-translate-y-1/2
            //                     -translate-x-1/2 z-20 transition ease-in-out duration-500"
            //   >
            //     <img
            //       src="/assets/icons/ic_play.svg"
            //       className=""
            //       width="50"
            //       alt=""
            //     />
            //   </div>
            //   <a href="watching.html" className="inset-0 absolute z-50"></a>
            // </div>
            <MovieCard
              key={i}
              slug={`judul-${i}`}
              name={`judul ${i}`}
              category={`category ${i}`}
              thumbnail={`/assets/images/browse-1.png`}
            />
          ))}
          {/* Movies */}
        </Flickity>
      </div>
      {/* END: Browse */}
    </Authenticated>
  );
}
