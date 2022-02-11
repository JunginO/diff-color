import styled from "styled-components";
interface IBox {
  width: number;
  diffrentBox: number;
  currentBox: number;
  onClick: any;
  colors: number;
  colordiff: number;
}

const Box = styled.div<IBox>`
  background: ${(props) =>
    props.currentBox === props.diffrentBox
      ? "hsl(" + props.colors.toString() + ", 100%, 70%)"
      : "hsl(" +
        props.colors.toString() +
        ", 100%, " +
        props.colordiff.toString() +
        "%)"};

  width: ${(props) => props.width}px;
  height: ${(props) => props.width}px;
  display: inline-block;
  margin: 2px;
`;

export default Box;
