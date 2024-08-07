import NavLinks from "@/app/ui/home/category/category-links";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="flex flex-row gap-8 bg-slate-100 rounded-lg py-2 px-4">
        <NavLinks></NavLinks>
      </div>
      <div className="flex p-6  md:p-12">{children}</div>
    </div>
  );
}
