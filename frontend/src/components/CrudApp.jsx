import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  styled,
} from '@mui/material';

const StyledCard = styled(Card)({
  margin: 'auto',
  marginTop: '50px',
});

const styles = {
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    marginTop: '30',
  },
};

const CrudApp = () => {
  return (
    <StyledCard sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={require('../assets/CRUD.jpeg')}
        title="CRUD"
        style={styles.media}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          CRUD Application
        </Typography>
        <Typography variant="body2" color="text.secondary">
          CRUD is an acronym that comes from the world of computer programming
          and refers to the four functions that are considered necessary to
          implement a persistent storage application: create, read, update and
          delete.
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

export default CrudApp;
