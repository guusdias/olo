const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export default function ProductCardSkeleton() {
  return (
    <div
      className={`${shimmer} border p-4 rounded-lg flex flex-col w-80 h-96 justify-between relative overflow-hidden bg-gray-100 shadow-sm`}
    >
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="w-40 h-40 bg-gray-200 mb-4"></div>
        <div className="w-3/4 h-6 bg-gray-200 mb-2"></div>
        <div className="w-1/2 h-6 bg-gray-200 mb-2"></div>
        <div className="w-1/4 h-6 bg-gray-200"></div>
      </div>
      <div className="mt-4 flex justify-center">
        <div className="w-3/4 h-10 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
}
