// import LinkImage from "../images/"
import{useState} from "react";
import {
  ChangeBox,
  Box,
  Text,
  BottomRadius,
  SecondBox,
  Stats,
  Ul,
  StatsText,
  StatsInfo,
  TextLink,
  Wikipedia,
  Image,
  ChangeBoxTablet,
  TextNumerationTablet,
  ImageBox,
  ContentBox,
  SecondContent,
  ContentSpecialBox,
  BoxTabletStructure,
  BoxTabletSurface,
  BoxTablet,
  TextTablet,
  Tablet,
  Information,
  Headline,
  PlanetImage,
  SurfaceImage,
} from "./Info.styled";

function Info(props: any) {
  const [color, setColor] = useState(props.data.color);
  const [hoverColor, setHoverColor] = useState("#d8d8d847");
  const [overview, setOverview] = useState<boolean>(false);
  const [structure, setStructure] = useState<boolean>(false);
console.log(props.text);
  const makeOverview = () => {
    setColor(props.data.color);
    setOverview(true);
    props.setText(props.data.overview.content);
    props.setImage(props.data.images.planet);
    props.setSurface(false);
    setStructure(false);

  };
  const makeStructure = () => {
    setColor(props.data.color);
    setStructure(true);
    setOverview(false);
    props.setText(props.data.structure.content);
    props.setImage(props.data.images.internal);
    props.setSurface(false);
  };
  const makeSurface = () => {
    setColor(props.data.color);
    setStructure(false);
    setOverview(false);
    props.setText(props.data.geology.content);
    props.setImage(props.data.images.planet);
    props.setSurface(true);
  };
  return (
    <>
    <ChangeBox>
      <Box onClick={makeOverview}>
        <Text>OVERVIEW</Text>
        <BottomRadius/>
      </Box>
      <Box onClick={makeStructure}>
        <Text>STRUCTURE</Text>
        <BottomRadius/>
      </Box>
      <Box onClick={makeSurface}>
        <Text>SURFACE</Text>
        <BottomRadius color={props.color}/>
      </Box>
    </ChangeBox>
    </>
  );
}

export default Info;
