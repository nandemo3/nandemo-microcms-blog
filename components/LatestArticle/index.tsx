import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

import { Article } from '@/libs/microcms';

interface LatestArticleProps {
  article?: Article;
}

export default function LatestArticle({ article }: LatestArticleProps) {

  if (!article) {
    return <p>記事がありません。</p>;
  }

  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${article.thumbnail?.url})`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={article.thumbnail?.url} />}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              {article.title}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {article.description}
            </Typography>
            <Link 
              color="inherit"
              variant="subtitle1"
              fontWeight="bold"
              href={`/articles/${article.id}`}>
              Read more
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}