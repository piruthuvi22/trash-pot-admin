import styled from "@emotion/styled";
import { Button } from "@mui/material";

const ChipButton = styled(Button)(({ theme }) => ({
  color: "#222",
  backgroundColor: "#fff",
  borderRadius: 100,
  fontSize: 12,
  textTransform:"capitalize",
  "&:hover": {
    backgroundColor: "#ddd",
  },
}));

export default ChipButton;
