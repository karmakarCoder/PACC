export default function Preloader() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-[9999]">
      <div className="size-28 border-[14px] border-[#148287] border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}
