import Header from "@/app/ui/home/heading-bar";

// export const experimental_ppr = true;
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-col">
      <div className="w-full">
        <Header />
      </div>
      <div className="flex p-6  md:p-12 justify-center items-center h-fit">
        {children}
      </div>
    </div>
  );
}
