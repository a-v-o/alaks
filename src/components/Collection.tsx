export default function Collection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative w-[92.5%] md:w-[75%] flex flex-col items-center justify-center h-[640px] mb-24">
      {children}
    </div>
  );
}
