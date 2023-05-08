import React from "react";
import Container from "./Container";
import HeroSlideshow from "./user/HeroSlideShow";
import NotVerified from "./user/NotVerified";

import FilmTv from "./user/FilmTv";
import RelatedVideos from "./user/RelatedVideos";
import SubjectMatterExpert from "./user/SubjectMatterExpert";
import ReturnToPlay from "./user/ReturnToPlay";



export default function Home() {
  return (
    <div className="dark:bg-primary bg-white min-h-screen">
      <Container className="px-2 xl:p-0">
        <NotVerified />
        {/* slideshow at Top */}
        <HeroSlideshow />
        {/* Each rendered to UI  */}
        <div className="space-y-3 py-8">
          <ReturnToPlay />
          <SubjectMatterExpert />                           
          <RelatedVideos />
          <FilmTv />                  
        </div>
      </Container>
    </div>
  );
}