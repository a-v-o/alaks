import AnimatedText from "./AnimatedText";

export default function About() {
  return (
    <section
      className="flex flex-col items-center justify-center p-12 md:p-20 gap-8"
      id="about"
    >
      <h2 className="text-4xl">About</h2>
      <p>
        <AnimatedText text="I am Gideon Ayodele Alaka, a Nigerian fashion designer. I started exploring fashion in my mom's closet before I was even old enough to realize it. Fashion chose me at a young age and today, I create pieces that empower you to feel comfortable, inspired and confident in your own skin. Every tshirt, hoodie, jogger, shorts and other fashion wears are designed to turn heads and also connect you to your roots while you stay stylish." />
      </p>
      <div className="">
        <img
          src="ceo.png"
          alt="image of alaks ceo"
          className="w-full h-full object-contain"
        />
      </div>
    </section>
  );
}
