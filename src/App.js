import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import backgroundFirst from "./assets/img/Bg1.jpg"
import backgroundSecond from "./assets/img/Bg2.jpg"
import './App.css';

import './index.css'

function App() {
  return (
    <>
      <Header
        title="Some title"
        description="some description first"
      />
      <Layout
        urlBg={backgroundFirst}
        title="Consectetur adipiscing"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore"
      />

      <Layout
        colorBg = '#d3dfe7'
        title="Consectetur adipiscing"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore"
      />
      <Layout
        urlBg={backgroundSecond}
        title="Consectetur adipiscing"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore"
      />
      <Footer/>
    </>
  );
}

export default App;
