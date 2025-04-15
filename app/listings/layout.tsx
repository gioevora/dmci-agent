export default function ListingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex flex-col items-center inset-0 justify-center w-full h-48 bg-cover bg-center bg-no-repeat py-8"
        style={{
          backgroundImage: `url('https://dmci-agent-bakit.s3.ap-southeast-1.amazonaws.com/media/hero-shd.webp')`,
        }}>
        <h1 className="uppercase text-4xl font-bold">listings</h1>
      </div>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        
        {children}

      </section>
    </>
  );
}
