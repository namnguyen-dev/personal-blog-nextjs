import WeeklyPosts from './components/WeeklyPosts';
import Welcome from './components/Welcome';

export default function Home() {
  return (
    <main className="container flex min-h-screen flex-col items-center justify-between ">
      <Welcome />
      <WeeklyPosts />
    </main>
  );
}
