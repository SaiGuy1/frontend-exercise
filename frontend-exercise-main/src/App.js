import './App.css';
import Header from './Header/Header';
import PostList from './PostList/PostList';


// developing project without using React Hooks. 
// Can be easily adjusted if necessary. Possibly may do a resubmission tonight using hooks.

function App() {
  return (
    <div className="root">
      <header>
        <Header />
        <PostList />
      </header>
    </div>
  );
}

export default App;
