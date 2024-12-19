export const metadata = {
  title: "About Me",
};

export default function AboutLayout({ children }) {
  return (
    <div>
      <div>{children}</div>

      <div className="mt-8">
        <h2 className="mb-4 text-xl">You might Also Like:</h2>

        <ul>
          <li>First Blog Post</li>
          <li>Second Blog Post</li>
        </ul>
      </div>
    </div>
  );
}
