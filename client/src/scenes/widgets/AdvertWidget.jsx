import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"        
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
        src={`${process.env.REACT_APP_BACKEND_URL}/assets/purplecarrot1.JPG`}             
      />
      <FlexBetween>
        <Typography color={main}>Purple Carrot</Typography>
        <Typography color={medium}>purplecarrot.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
      "Everyone would eat this if they knew how good it was" - Laurel, switched to plant-based at 60.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;