import { Box } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import PublicIcon from "@mui/icons-material/Public";

export const CardProject = ({ name, description, html_url, homepage }) => {
  return (
    <>
      <Box className="flex flex-col gap-2 bg-green-tone border-2 border-green-100 rounded-xl p-8 md:max-w-md
      animate-fade-left animate-once animate-duration-1000">
        <h1 className="uppercase tracking-wide text-3xl text-green-tone-200 font-semibold drop-shadow-lg">
          {name}
        </h1>
        <div className="flex items-center">
          <GitHubIcon />
          <a
            target="_blank"
            href={html_url}
            className="block pl-3 mt-1 overflow-hidden text-lg leading-tight font-medium text-green-tone-950 hover:underline"
          >
            {html_url}
          </a>
        </div>
        <div
          className="flex items-center
            "
        >
          <PublicIcon />
          <a
            target="_blank"
            href={homepage}
            className="block pl-3  mt-1 text-lg leading-tight font-medium text-green-tone-950 hover:underline"
          >
            {homepage}
          </a>
        </div>

        <p className="mt-2 text-green-tone-50">{description}</p>
      </Box>
    </>
  );
};
