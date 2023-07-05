import { Typography, useTheme } from '@mui/material';

const Logo = () => {
  const theme = useTheme();

  return (
    <Typography fontWeight="700" fontSize="1.7rem">
      Watching<span style={{ color: theme.palette.primary.main }}>Film</span>
    </Typography>
  );
};

export default Logo;