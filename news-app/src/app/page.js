import Card from "@/components/card/Card";
import cardImage from '../../public/asset/cardImage.webp'
export default function Home() {
  return (
    <div className="bg-gray-900 ">
      <h1 className="text-4xl text-center font-bold py-5 text-gray-200">News - Top General Headlines      </h1>
      <div className="grid grid-col-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
      <Card cardImage={cardImage} heading={"i love you"} description={"jskj fdjskaklfkl asdfajkjfklsda jfdkladfjkl jfkldsjljsd"}/>
      <Card cardImage={cardImage} heading={"i love you"} description={"jskj fdjskaklfkl asdfajkjfklsda jfdkladfjkl jfkldsjljsd"}/>
      <Card cardImage={cardImage} heading={"i love you"} description={"jskj fdjskaklfkl asdfajkjfklsda jfdkladfjkl jfkldsjljsd"}/>
      <Card cardImage={cardImage} heading={"i love you"} description={"jskj fdjskaklfkl asdfajkjfklsda jfdkladfjkl jfkldsjljsd"}/>
      <Card cardImage={cardImage} heading={"i love you"} description={"jskj fdjskaklfkl asdfajkjfklsda jfdkladfjkl jfkldsjljsd"}/>
      <Card cardImage={cardImage} heading={"i love you"} description={"jskj fdjskaklfkl asdfajkjfklsda jfdkladfjkl jfkldsjljsd"}/>
      <Card cardImage={cardImage} heading={"i love you"} description={"jskj fdjskaklfkl asdfajkjfklsda jfdkladfjkl jfkldsjljsd"}/>
      <Card cardImage={cardImage} heading={"i love you"} description={"jskj fdjskaklfkl asdfajkjfklsda jfdkladfjkl jfkldsjljsd"}/>
      <Card cardImage={cardImage} heading={"i love you"} description={"jskj fdjskaklfkl asdfajkjfklsda jfdkladfjkl jfkldsjljsd"}/>
      </div>
    </div>
  );
}
