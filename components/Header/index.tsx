import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
// import Link from 'next/link';
import Link from '@mui/material/Link';
import { Tag } from '@/libs/microcms';

interface HeaderProps {
  title: string;
  tags: Tag[];
}

export default function Header(props: HeaderProps) {
  const { tags, title } = props;

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
        <IconButton>
          <SearchIcon />
        </IconButton>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'center', overflowX: 'auto' }}
      >
        {tags.map((tag) => (
          <Link
            color="inherit"
            noWrap
            key={tag.id}
            variant="body2"
            href={`/tags/${tag.id}`}
            sx={{ p: 1, flexShrink: 0 }}
          >
            #{tag.name}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}