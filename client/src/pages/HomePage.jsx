import React from 'react';
import HeroSlide from '../components/common/HeroSlide';
import tmdbConfigs from "../api/configs/tmdb.configs";
import { Box } from '@mui/material';
import uiConfigs from "../configs/ui.configs";
import Container from "../components/common/Container";
import MediaSlide from "../components/common/MediaSlide";

const HomePage = () => {
  return (
    <>
      <HeroSlide mediaType={tmdbConfigs.mediaType.movie} mediaCategory={tmdbConfigs.mediaCategory.popular} />

      <Box marginTop="-4rem" sx={{ ...uiConfigs.style.mainContent }}>
        <Container header="Phim mới">
          <MediaSlide mediaType={tmdbConfigs.mediaType.movie} mediaCategory={tmdbConfigs.mediaCategory.popular} />
        </Container>

        <Container header="Phim bộ">
          <MediaSlide mediaType={tmdbConfigs.mediaType.tv} mediaCategory={tmdbConfigs.mediaCategory.popular} />
        </Container>

        <Container header="phim lẻ Top Rate">
          <MediaSlide mediaType={tmdbConfigs.mediaType.movie} mediaCategory={tmdbConfigs.mediaCategory.top_rated} />
        </Container>

        <Container header="Phim bộ Top rate">
          <MediaSlide mediaType={tmdbConfigs.mediaType.tv} mediaCategory={tmdbConfigs.mediaCategory.top_rated} />
        </Container>
      </Box>
    </>
  );
};

export default HomePage;