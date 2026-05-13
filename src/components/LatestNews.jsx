import MarqueeModule from "react-fast-marquee";

const Marquee = MarqueeModule.default || MarqueeModule;

function LatestNews() {
  return (
    <div className="flex gap-5 items-center bg-base-200 p-3">
      <p className="text-base-100 bg-secondary py-2 px-3">Latest</p>

      <Marquee pauseOnHover={true}>
        <div className="flex gap-5">
          <p className="font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <p className="font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className="font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </Marquee>
    </div>
  );
}

export default LatestNews;
