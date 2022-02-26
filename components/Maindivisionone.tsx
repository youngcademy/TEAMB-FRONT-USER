import type { NextPage } from "next";
import Image from "next/image";
import image_one from "./image_one.jpg";
import image_two from "./image_two.jpg";
import image_three from "./image_three.jpg";
const Maindivisionone: NextPage = () => {
  return (
    <>
      <div className="userfrontimage" style={styles1.container}>
        <Image src={image_one} alt="1번사진" width={650} height={800} />
        <Image src={image_two} alt="2번사진" width={650} height={800} />
        <Image src={image_three} alt="3번사진" width={650} height={800} />
      </div>
    </>
  );
};

const styles1 = {
  container: { display: "flex", marginBottom: "110px" },
} as const;

export default Maindivisionone;
