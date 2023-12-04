import Header from "@/components/Header";

function HomePageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default HomePageLayout;
