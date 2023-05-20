export default function SectionHeader({ title }) {
  return (
    <div className="max-w-2xl mx-auto mb-8 text-center ">
      <h1 className="font-heading text-5xl xs:text-6xl md:text-7xl font-bold">
        <span>{title}</span>
      </h1>
      <p className="mt-2 text-lg">See all posts I have ever written.</p>
    </div>
  );
}
