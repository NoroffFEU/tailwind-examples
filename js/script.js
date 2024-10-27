const newsItems = [
  {
    headline: "Breaking News: Major Event Happening Now",
    summary:
      "A major event is currently unfolding with significant impact. Stay tuned for more details as they develop.",
  },
  {
    headline: "Technology: New Breakthrough in AI",
    summary:
      "Researchers have announced a new breakthrough in artificial intelligence, potentially transforming industries worldwide.",
  },
  {
    headline: "Sports: Championship Results",
    summary:
      "The latest championship results are in, and the winner has been crowned after a thrilling competition.",
  },
];

const newsDiv = document.getElementById("news");

function createNewsItem(news) {
  const newsDivItem = document.createElement("div");
  newsDivItem.classList.add(
    "bg-white",
    "shadow-md",
    "rounded-lg",
    "p-6",
    "mb-6"
  );

  const newsHeadline = document.createElement("h3");
  newsHeadline.classList.add("text-2xl", "font-bold", "mb-4");
  newsHeadline.textContent = news.headline;

  const newsSummary = document.createElement("p");
  newsSummary.classList.add("text-gray-700", "text-base");
  newsSummary.textContent = news.summary;

  newsDivItem.appendChild(newsHeadline);
  newsDivItem.appendChild(newsSummary);

  newsDiv.appendChild(newsDivItem);
}

newsItems.forEach((news) => createNewsItem(news));
