import Header from './Components/Header'
import Main from './Components/Main'
import BookList from './Components/BookList'
import Footer from './Components/Footer'

const dataNonfiction = '/data/nonfiction.json';
const dataFiction = '/data/fiction.json';
const Children = '/data/children.json';
const selfImprovment = '/data/self_improvement.json';
const customBackgroundStyle1 = {
  backgroundImage:`url('images/moon.jpg')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};
const customBackgroundStyle2 = {
  backgroundImage:`url('images/mountain.jpg')`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};
function App() {
  return (
    <div className='App-Content' >
      <Header />
      <Main/>
      <BookList id={1} title={"Nonfiction"} dataPath={dataNonfiction}  />
      <BookList id={2} title={"Fiction"} dataPath={dataFiction} backgroundStyle={customBackgroundStyle1} />
      <BookList id={3} title={"Children's"} dataPath={Children}  />
      <BookList id={4} title={"Self Improvment"} dataPath={selfImprovment} backgroundStyle={customBackgroundStyle2} />
      <Footer />
    </div>
  );
}

export default App;
