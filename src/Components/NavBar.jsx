import React from "react";

import { Link } from "react-router-dom";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

import { Container } from "../theme";



const AntTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    minWidth: 0,
    [theme.breakpoints.up("sm")]: {
      minWidth: 0,
    },
  fontSize: '1.5rem',
    fontWeight: theme.typography.fontWeightRegular,
    color: "#fff",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      color: "#ccc",
      opacity: 1,
    },
    "&.Mui-selected": {
      color: "#fff",
      fontWeight: theme.typography.fontWeightMedium,
    },
    "&.Mui-focusVisible": {
      backgroundColor: "#0018cc",
    },
  })
);
const AntTabs = styled(Tabs)({
  '& .MuiTabs-indicator': {
    backgroundColor: '#1900F1',
  },

});

export default function NavBar() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  return (
    <Container>
      <Box sx={{ width: "100%" }}>
        <AntTabs value={value} TabIndicatorProps={{style: {background:'#1900F1'}}} onChange={handleChange} centered >
          <AntTab label="Home"  to="/" component={Link} />
          <AntTab label="About"  to="/about" component={Link} />      
          <AntTab label="Experience" to="/experience" component={Link}  />
        </AntTabs>
      </Box>
    </Container>
  );
}
