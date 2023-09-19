import Grid from '@mui/material/Grid';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

import { getList, getWriters, Writer } from '@/libs/microcms';
import { LIMIT } from '@/constants';

import LatestArticle from '@/components/LatestArticle';
import FeaturedArticle from '@/components/FeaturedArticle';
import Sidebar from '@/components/Sidebar';

export const revalidate = 0;

const social = [
  { name: 'GitHub', icon: GitHubIcon, url: "https://github.com/nandemo3" },
  { name: 'X', icon: TwitterIcon, url: "https://twitter.com/nandemo_3_" },
]

export default async function Page() {
  const data = await getList({
    limit: LIMIT,
  });
  const writers = await getWriters();
  const featuredArticles = data.contents.slice(1)

  return (
    <>
      <LatestArticle article={data.contents[0]}/>
      <Grid container spacing={5} sx={{ mt: 3 }}>
        <Grid item xs={8}>
          {featuredArticles.map((article) => (
            <FeaturedArticle key={article.id} article={article} />
          ))}
        </Grid>
        <Grid item xs={4}>
          <Sidebar
            //@ts-ignore
            title={writers.contents[0].name}
            //@ts-ignore
            description={writers.contents[0].profile}
            social={social}
          />
        </Grid>
      </Grid>
    </>
  );
}
