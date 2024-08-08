import NavLinks from "@/app/ui/home/category/category-links";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col justify-center self-center">
      <div className="flex flex-row gap-8 bg-slate-100 rounded-lg py-2 px-4 w-fit md:ml-12 mb-4">
        <NavLinks></NavLinks>
      </div>
      <div className="flex  md:p-12 justify-center items-center h-fit">
        {children}
      </div>
    </div>
  );
}
