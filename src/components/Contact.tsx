import { BsInstagram, BsTiktok } from "react-icons/bs";

export default function Contact() {
  return (
    <section className="w-full p-12 flex flex-col gap-6 items-center justify-center bg-green-300">
      <p>Get in touch with us</p>
      <div className="flex justify-center gap-8">
        <a
          href="https://www.tiktok.com/@alaks"
          className="p-2 rounded-lg flex justify-center items-center bg-black text-white hover:bg-white hover:text-black transition-all"
        >
          <BsTiktok />
        </a>
        <a
          href="https://www.instagram.com/alaks"
          className="p-2 rounded-lg flex justify-center items-center bg-black text-white hover:bg-white hover:text-black transition-all"
        >
          <BsInstagram />
        </a>
      </div>
    </section>
  );
}
