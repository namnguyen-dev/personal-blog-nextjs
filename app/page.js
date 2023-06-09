import Welcome from './components/Welcome';
import WeeklyPosts from './components/WeeklyPosts';
import TrendingPosts from './components/TrendingPosts';
import AllPosts from './components/AllPosts';

export default function Home() {
  return (
    <main className="container flex min-h-screen flex-col items-center justify-between ">
      <Welcome />
      <WeeklyPosts />
      <TrendingPosts />
      <AllPosts />
    </main>
  );
}
