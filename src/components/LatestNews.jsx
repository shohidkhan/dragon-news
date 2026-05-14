import MarqueeModule from "react-fast-marquee";

const Marquee = MarqueeModule.default || MarqueeModule;

function LatestNews({ data }) {
  const breakingNews = data.filter((news) => news.others.is_today_pick == true);
  // console.log(breakingNews);
  return (
    <div className="flex gap-5 items-center bg-base-200 p-3">
      <p className="text-base-100 bg-secondary py-2 px-3">Latest</p>

      <Marquee pauseOnHover={true}>
        <div className="flex gap-5">
          {breakingNews.map((news) => (
            <p className="font-bold" key={news.id}>
              {news.title}
            </p>
          ))}
        </div>
      </Marquee>
    </div>
  );
}

export default LatestNews;
