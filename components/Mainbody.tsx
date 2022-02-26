import type { NextPage } from "next";
import Maindivisionone from "./Maindivisionone";
import Productsmall from "./Productsmall";
const Mainbody: NextPage = () => {
  return (
    <>
      <div className="userfrontimagebox" style={styles1.container}>
        <Maindivisionone />
        <Productsmall />
      </div>
    </>
  );
};

const styles1 = {
  container: { padding: "0.5rem" },
} as const;

export default Mainbody;
