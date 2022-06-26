import { useEffect, useState } from "react";

const App = (): JSX.Element => {
  const [allBookmarks, setAllBookMarks] = useState<
    chrome.bookmarks.BookmarkTreeNode[]
  >([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    chrome.bookmarks.search({}, (bookmarkItems) => {
      setAllBookMarks(bookmarkItems.filter((item) => "url" in item));
    });
  }, []);

  return (
    <div>
      <h1>Popup Page</h1>
      <input
        type="text"
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            const regexp = new RegExp(`#${query}(\s|$)`);
            const bookmarks = allBookmarks.filter((item) =>
              regexp.test(item.title)
            );
            for (const bookmark of bookmarks) {
              chrome.tabs.create({ url: bookmark.url });
            }
          }
        }}
      />
      {allBookmarks.map((bookmark) => {
        return <p key={bookmark.id}>{bookmark.title}</p>;
      })}
    </div>
  );
};

export default App;
