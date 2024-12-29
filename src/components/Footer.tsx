interface FooterProps {
  data: any;
  showDetails: boolean;
  onToggleDetails: () => void;
}

export default function Footer({ data, onToggleDetails }: FooterProps) {
  return (
    <footer>
      <div className="bgGradient"></div>
      <div>
        <h1>{data?.title}</h1>
        <h2>Project</h2>
      </div>
      <button onClick={onToggleDetails}>
        <i className="fa fa-info"></i>
      </button>
    </footer>
  );
}
