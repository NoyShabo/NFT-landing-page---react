import './App.css';
import { CounerSaleEnd } from './cmp/counter-sale-end/couner-sale-end';
import {FindNewHome} from './cmp/find-new-home/find-new-home';
import { Footer } from './cmp/footer/footer';
import { Header } from './cmp/header/header';
import KeyFeatures from './cmp/key-featuters/key-features';
import { MainHeader } from './cmp/main-header/main-header';
import { MeitIsAllAbout } from './cmp/meit-is-all-about/meit-is-all-about';
import { OurMission } from './cmp/our-mission/our-mission';
import { OurVision } from './cmp/our-vision/our-vision';
import { Roadmap } from './cmp/roadmap/roadmap';
import { StreetArt } from './cmp/street-art/street-art';

function App() {
  return (
    <div className="App">
      <Header />
      <MainHeader/>
      <CounerSaleEnd />
      <StreetArt />
      <OurMission />
      <FindNewHome />
      <KeyFeatures />
      <MeitIsAllAbout />
      <Roadmap />
      <OurVision />
      <Footer />
    </div>
  );
}

export default App;
