const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export default function ProductCardSkeleton() {
  return (
    <div
      className={`${shimmer} border p-4 rounded-lg flex flex-col w-80 h-96 justify-between relative overflow-hidden bg-gray-100 shadow-sm`}
    >
      <div className="flex p-4"></div>
      <div className="flex p-4">
        <div className="h-5 w-5 rounded-md bg-gray-100"></div>
        <div className="text-gray-700 bg-gray-100"></div>
        <div className="ml-2 h-6 w-16 bg-gray-100"></div>
        <div className="h-7 w-20 rounded-md bg-gray-200"></div>
      </div>
    </div>
  );
}
