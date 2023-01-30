// eslint-disable-next-line import/no-extraneous-dependencies
import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  root: {
    display: 'flex',
    height: '100%',
    width: '100%',
  },
  toolbar: {
    height: '70px',
  },
  content: {
    flexGrow: '1',
    padding: '2em',
    width: '100%',
  },
}));
