export default function Cards({ children, className }) {
  return (
    <div className={"border rounded-md border-gray-600 p-4 ${className}"}>
      {children}
    </div>
  );
}
