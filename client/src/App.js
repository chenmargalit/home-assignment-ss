import CreateCommentForm from './components/form/createCommentForm';
import Comments from './components/comments/comments';
import Card from './components/card/card';

function App() {
  return (
    <>
      <Card>
        <CreateCommentForm />
        <Comments />
      </Card>
    </>
  );
}

export default App;
