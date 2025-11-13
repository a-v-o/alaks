export default function Collection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative w-full flex flex-col items-center justify-center h-[640px] mb-12">
      {children}
    </div>
  );
}
