export default function Toast() {
  return (
    <div className="fixed top-4 left-4 transition text-white bg-green-500 hover:bg-green-600 rounded-md px-5 py-4 cursor-pointer z-50">
      <div className="flex items-center space-x-2">
        <svg
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="m5 13 4 4L19 7"
          />
        </svg>
        <p className="font-bold">Item Added Successfully!</p>
      </div>
    </div>
  );
}