import ClothCard from "./ClothCard";
import Collection from "./Collection";
import { useIsMobile } from "../hooks/use-mobile";
import CollectionText from "./CollectionText";
import AnimatedText from "./AnimatedText";

const tShirts = ["alaks-1.JPG", "alaks-3.JPG", "alaks-4.JPG", "alaks-5.JPG"];
const hoodies = ["alaks-2.JPG", "alaks-6.JPG", "alaks-8.JPG", "alaks-10.JPG"];
const shorts = ["alaks-11.JPG", "alaks-13.JPG"];
const trousers = ["alaks-9.JPG", "alaks-12.JPG"];

function generateRandomIntegers(numbers: number[][]) {
  const randomizedNumbers: number[][] = [];
  numbers.forEach((number) => {
    const firstNumber =
      Math.floor(Math.random() * (Math.abs(number[0] - 10) - number[0] + 1)) +
      number[0];
    const secondNumber =
      Math.floor(Math.random() * (Math.abs(number[1] - 10) - number[1] + 1)) +
      number[1];
    randomizedNumbers.push([firstNumber, secondNumber]);
  });
  return randomizedNumbers;
}

function generateCoords(length: number) {
  const topLeft = [0, 0];
  const bottomRight = [100, 100];
  const topRight = [0, 100];
  const bottomLeft = [100, 0];

  const percentages = generateRandomIntegers([
    topLeft,
    bottomRight,
    topRight,
    bottomLeft,
  ]);
  return percentages.slice(0, length);
}

export default function Shop() {
  const tShirtPercents = generateCoords(tShirts.length);
  const hoodiePercents = generateCoords(hoodies.length);
  const shortPercents = generateCoords(shorts.length);
  const trouserPercents = generateCoords(trousers.length);
  const isMobile = useIsMobile();
  const heightToSubtract = isMobile ? 120 : 192;
  const widthToSubtract = isMobile ? 80 : 128;
  return (
    <section className="w-full pt-12" id="collection">
      <div className="flex flex-col items-center w-full relative">
        <p className="text-2xl md:text-4xl mb-24">
          What can you find in our store?
        </p>

        <Collection>
          <CollectionText>
            <h3 className="text-3xl uppercase">
              <AnimatedText text="tshirts" />
            </h3>
            <p>
              <AnimatedText text="Bring a burst of color into your wardrobe. Shop our collection of tie-and-dye tshirts today and step out in a style that's bold, vibrant and uniquely you." />
            </p>
          </CollectionText>
          {tShirts.map((tShirt, index) => {
            const top =
              tShirtPercents[index][0] > 50
                ? `calc(${tShirtPercents[index][0]}% - ${heightToSubtract}px)`
                : tShirtPercents[index][0] + "%";
            const left =
              tShirtPercents[index][1] > 50
                ? `calc(${tShirtPercents[index][1]}% - ${widthToSubtract}px)`
                : tShirtPercents[index][1] + "%";
            return (
              <div>
                <ClothCard
                  top={top}
                  left={left}
                  src={tShirt}
                  alt="image of an Alaks tShirt"
                />
              </div>
            );
          })}
        </Collection>

        <Collection>
          <CollectionText>
            <h3 className="text-3xl uppercase">
              <AnimatedText text="hoodies" />
            </h3>
            <p>
              <AnimatedText text="Wrap yourself in comfort and colour. Discover our unique tie-and-dye hoodies and choose the vibe that matches your energy" />
            </p>
          </CollectionText>
          {hoodies.map((hoodie, index) => {
            const top =
              hoodiePercents[index][0] > 50
                ? `calc(${hoodiePercents[index][0]}% - ${heightToSubtract}px)`
                : hoodiePercents[index][0] + "%";
            const left =
              hoodiePercents[index][1] > 50
                ? `calc(${hoodiePercents[index][1]}% - ${widthToSubtract}px)`
                : hoodiePercents[index][1] + "%";
            return (
              <div>
                <ClothCard
                  top={top}
                  left={left}
                  src={hoodie}
                  alt="image of an Alaks hoodie"
                />
              </div>
            );
          })}
        </Collection>

        <Collection>
          <CollectionText>
            <h3 className="text-3xl uppercase">
              <AnimatedText text="shorts" />
            </h3>
            <p>
              <AnimatedText text="Stay cool, stylish and effortless. Grab our tie-and-dye shorts made for comfort and colors that pop. Perfect for outings, chill days or vacations." />
            </p>
          </CollectionText>
          {shorts.map((short, index) => {
            const top =
              shortPercents[index][0] > 50
                ? `calc(${shortPercents[index][0]}% - ${heightToSubtract}px)`
                : shortPercents[index][0] + "%";
            const left =
              shortPercents[index][1] > 50
                ? `calc(${shortPercents[index][1]}% - ${widthToSubtract}px)`
                : shortPercents[index][1] + "%";
            return (
              <div>
                <ClothCard
                  top={top}
                  left={left}
                  src={short}
                  alt="image of an Alaks short"
                />
              </div>
            );
          })}
        </Collection>

        <Collection>
          <CollectionText>
            <h3 className="text-3xl uppercase">
              <AnimatedText text="trousers" />
            </h3>
            <p>
              <AnimatedText text="Upgrade your wardrobe with trousers that do more than fit. Make a statement with our tie-and-dye collection of trousers that make you stand out" />
            </p>
          </CollectionText>
          {trousers.map((trouser, index) => {
            const top =
              trouserPercents[index][0] > 50
                ? `calc(${trouserPercents[index][0]}% - ${heightToSubtract}px)`
                : trouserPercents[index][0] + "%";
            const left =
              trouserPercents[index][1] > 50
                ? `calc(${trouserPercents[index][1]}% - ${widthToSubtract}px)`
                : trouserPercents[index][1] + "%";
            return (
              <div>
                <ClothCard
                  top={top}
                  left={left}
                  src={trouser}
                  alt="image of an Alaks trouser"
                />
              </div>
            );
          })}
        </Collection>
      </div>
    </section>
  );
}
