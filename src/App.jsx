import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Card from './components/Card.jsx';
import Footer from './components/Footer.jsx';
import CardContainer from './components/CardContainer.jsx';

function App() {
  const description = [
    'this is the description of the card 1',
    'this is the description of the card 2',
    'this is the description of the card 3',
  ];

  return (
    <>
      <Nav />
      <Hero />
      <CardContainer>
        <Card
          titleName="Nice View"
          text={description[0]}
          src="https://picsum.photos/200?random=1"
        />
        <Card
          titleName="Excellent image"
          text={description[1]}
          src="https://picsum.photos/200?random=2"
        />
        <Card
          titleName="Awesome View"
          text={description[2]}
          src="https://picsum.photos/200?random=3"
        />
      </CardContainer>

      <Footer />
    </>
  );
}

export default App;