import { Stack } from '@mui/system';
import About from './components/About.jsx';
import Footer from './components/Footer.jsx';
import Intro from './components/Intro.jsx';
import Main from './components/Main.jsx';
import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <Stack
      spacing={3}
      alignItems="center"
      sx={{ backgroundColor: 'black', color: 'white' }}
    >
      <Navbar />
      <Intro />
      <Main />
      <About />
      <Footer />
    </Stack>
  );
}

export default App;
