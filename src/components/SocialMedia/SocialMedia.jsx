import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Box, Link } from "@mui/material";

export const SocialMedia = () => {
  return (
    <Box className="absolute right-3 top-0 h-full flex items-center z-30">
      <Box className="flex flex-col gap-6">
        <Link
          href="https://github.com/EderLimaDev/"
          target="_blank"
          color="inherit"
        >
          <GitHubIcon
            sx={{
              fontSize: 40,
              cursor: "pointer",
              "&:hover": { fill: "#25f62f" },
            }}
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/ederlimadev/"
          target="_blank"
          color="inherit"
        >
          <LinkedInIcon
            sx={{
              fontSize: 40,
              cursor: "pointer",
              "&:hover": { fill: "#25f62f" },
            }}
          />
        </Link>
        <Link
          href="https://www.instagram.com/ederlimapm/"
          target="_blank"
          color="inherit"
        >
          <InstagramIcon
            sx={{
              fontSize: 40,
              cursor: "pointer",
              "&:hover": { fill: "#25f62f" },
            }}
          />
        </Link>
      </Box>
    </Box>
  );
};
