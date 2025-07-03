import { Button } from "antd";
import type { IBotao } from "../interface/IBotao";

const EBotao = ({ placeholder }: IBotao) => {
  return (
    <>
      <Button type="primary">{placeholder}</Button>
    </>
  );
};

export default EBotao;
