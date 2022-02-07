import styled from "styled-components";
interface IBox {
  num: number;
  diff: number;
  current: number;
  onClick: any;
  colors: number;
  colordiff: number;
}

const Box = styled.div<IBox>`
  background: ${(props) =>
    props.current === props.diff
      ? "hsl(" + props.colors.toString() + ", 100%, 70%)"
      : "hsl(" +
        props.colors.toString() +
        ", 100%, " +
        props.colordiff.toString() +
        "%)"};

  width: ${(props) => props.num}px;
  height: ${(props) => props.num}px;
  display: inline-block;
  margin: 2px;
`;

export default Box;
