import Authenticated from "@/Layouts/Authenticated/Index";
import Flickity from "react-flickity-component";
import { Head } from "@inertiajs/react";
import FeaturedMovie from "@/Components/FeaturedMovie";

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
      <Head
        title="Dashboard"
        href="https://unpkg.com/flickity@2/dist/flickity.min.css"
      />
      <div>
        <div className="font-semibold text-[22px] text-black mb-4">
          Featured Movies
        </div>
        {/* Tambahkan div dengan overflow-hidden untuk membatasi carousel */}
        <div className="overflow-hidden">
          <Flickity className="gap-[30px]" options={FlickityOptions}>
            {[1, 2, 3, 4].map((item, i) => (
                <FeaturedMovie key={i} slug={'the-batman-in-love'} name={`The Batman In Love ${i}`} category={'Comedy'} thumbnail={`/assets/images/featured-1.png`} rating={3+i}/>
            ))}
          </Flickity>
        </div>
      </div>
    </Authenticated>
  );
}
