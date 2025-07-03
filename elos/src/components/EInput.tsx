import { Input } from "antd";
import type { IInput } from "../interface/IInput";

const Einput = ({ placeholder }: IInput) => {
  return (
    <>
      <Input placeholder={placeholder} />
    </>
  );
};

export default Einput;
