import Bio from '../components/Bio';
import Projects from '../components/Projects';
import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();

  return (
    <div className="container">
      <Bio />
      <Projects />
      <div className="xkcd-comic-btn">
        <button className="comic-btn" onClick={() => router.push('/comic')}>
          There is nothing here...
        </button>
      </div>
    </div>
  );
};

export default Home;
