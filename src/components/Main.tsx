interface MainProps {
  data: any;
}

export default function Main({ data }: MainProps) {
  return (
    <main className="image-container">
      <img src={data.hdurl} alt={data.title} className="image" />
    </main>
  );
}
