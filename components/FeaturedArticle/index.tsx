import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import { Article } from '@/libs/microcms';
import PublishedDate from '../Date';

interface LatestArticleProps {
  article: Article;
}

export default function FeaturedArticle({ article }: LatestArticleProps) {
  
  const updatedAt = new Date(article.updatedAt).toLocaleString()
  const url = `/articles/${article.id}`

  return (
    <Grid item xs={12} sx={{ mb: 3 }} >
      <CardActionArea component="a" href={url}>
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {article.title}
            </Typography>
            <PublishedDate date={updatedAt} />
            <Typography variant="subtitle1" paragraph>
              {article.description}
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
            image={article.thumbnail?.url}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
}