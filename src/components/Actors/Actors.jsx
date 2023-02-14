import React, { useState } from "react";
import {
  Typography,
  Button,
  ButtonGroup,
  Grid,
  Box,
  CircularProgress,
} from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { useHistory, useParams } from "react-router-dom";

import useStyles from "./styles";
import {
  useGetActorCreditsQuery,
  useGetActorInfoQuery,
} from "../../services/TMDB";
import { MovieList } from "..";
import { Pagination } from "..";

const Actors = () => {
  // retreive id and history from react-router
  const { id } = useParams();
  const history = useHistory();
  // retrieve styles
  const classes = useStyles();
  // state for pagination
  const [page, setPage] = useState(1);

  // redux data/state retreival
  const { data, isFetching, error } = useGetActorInfoQuery(id);
  const { data: movies } = useGetActorCreditsQuery({ id, page });

  // loading image
  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgress size="8rem" />
      </Box>
    );
  }

  // error display
  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <Button
          startIcon={<ArrowBack />}
          onClick={() => history.goBack()}
          color="primary"
        >
          Go Back
        </Button>
      </Box>
    );
  }

  return (
    // displays grid of information on the actor page - includes links to IMDB and paginated films
    <>
      <Grid container spacing={3}>
        <Grid item lg={5} xl={4}>
          <img
            className={classes.image}
            src={`https://image.tmdb.org/t/p/w780/${data?.profile_path}`}
            alt={data.name}
          />
        </Grid>
        <Grid
          item
          container
          direction="column"
          lg={7}
          xl={8}
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          {/* Displays biographical information */}
          <Typography variant="h2" gutterbottom>
            {data?.name}
          </Typography>
          <Typography variant="h5" gutterbottom color="textSecondary">
            Born: {new Date(data?.birthday).toDateString()}
          </Typography>
          <Typography variant="body2" align="justify" paragraph>
            {data?.biography || "No biography yet."}
          </Typography>
          <Box marginTop="2rem" display="flex" justifyContent="space-around">
            <Button
              variant="contained"
              color="primary"
              target="_blank"
              href={`https://www.imdb.com/name/${data?.imdb_id}`}
            >
              IMDB
            </Button>
            <Button
              startIcon={<ArrowBack />}
              onClick={() => history.goBack()}
              color="primary"
            >
              Back
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Box margin="2rem 0">
        <Typography variant="h2" gutterbottom align="center">
          Movies
        </Typography>
        {/* Displays films */}
        {movies && <MovieList movies={movies} numberOfMovies={12} />}
        <Pagination
          currentPage={page}
          setPage={setPage}
          totalPages={movies?.total_pages}
        />
      </Box>
    </>
  );
};

export default Actors;
