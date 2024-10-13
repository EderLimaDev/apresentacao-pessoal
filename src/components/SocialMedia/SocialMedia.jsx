import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Box } from "@mui/material";

export const SocialMedia = () => {
  return (
    <Box className="absolute right-3 top-0 h-full flex items-center">
      <Box className="flex flex-col gap-6">
        <GitHubIcon
          sx={{ fontSize: 40, cursor: "pointer", "&:hover": { fill: "#25f62f" } }}
        />
        <LinkedInIcon
          sx={{ fontSize: 40, cursor: "pointer", "&:hover": { fill: "#25f62f" } }}
        />
        <InstagramIcon
          sx={{ fontSize: 40, cursor: "pointer", "&:hover": { fill: "#25f62f" } }}
        />
      </Box>
    </Box>
  );
};
