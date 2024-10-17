import { Container } from "@mui/material";
import { CardProject } from "../../../../components/CardProject/CardProject";
import React, { useEffect, useState } from "react";

export const Projects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const getApiData = async () => {
      const url = "https://api.github.com/users/EderLimaDev/repos?per_page=100";
      return await fetch(url)
        .then((response) => response.json())
        .then((repoData) => setRepos(repoData));
    };
    getApiData();
  }, []);

  const selectedRepos = []

  repos.filter((repo) => repo.name.includes("expert-notes") ? selectedRepos.push(repo) : null)
  repos.filter((repo) => repo.name.includes("giovannaDias") ? selectedRepos.push(repo) : null)
 
  
  
  return (
    <> 
      <Container className="w-full h-screen pt-24 mb-24 relative">
        <h1
          className="relative text-4xl main-titles-font text-center font-bold text-green-tone-50 
            before:content-[''] before:bg-green-tone before:h-1 before:w-24 before:absolute before:bottom-0"
        >
          Meus Projetos
        </h1>
        {repos.length > 0 ? (
          <Container className="grid md:grid-cols-2 sm:grid-cols-1 gap-4 mt-10 " >
            <CardProject
              key={selectedRepos.id}
              name={selectedRepos[0].name}
              description={selectedRepos[0].description}
              html_url={selectedRepos[0].html_url}
              homepage={selectedRepos[0].homepage}
            />
            <CardProject
              key={selectedRepos.id}
              name={selectedRepos[1].name}
              description={selectedRepos[1].description}
              html_url={selectedRepos[1].html_url}
              homepage={selectedRepos[1].homepage}
            />
          </Container>
        ) : (
          <p>Carregando repositórios...</p>
        )}
      </Container>
    </>
  );
};
