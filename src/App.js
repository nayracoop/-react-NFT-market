import './App.css';
import Header from './components/common/Header'
import Hero from './components/common/Hero'
import Collection from './components/common/Collection'
import NFT from './components/common/NFT'
import Features from './components/common/Features'

function App() {
  return (
    <div className="App">
      <Header className="App-header" />
      <Hero />
      <Collection />
      <NFT />
      <Features />
    </div>
  );
}



export default App;
