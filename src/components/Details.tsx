interface DetailsProps {
  data: any;
  onToggleDetails: () => void;
}

export default function Details({ data, onToggleDetails }: DetailsProps) {
  return (
    <div onClick={onToggleDetails} className="details">
      <div className="bgOverlay"></div>
      <div className="details-content">
        <h2>{data?.title}</h2>
        <div className="details-description">
          <h2>{data?.date}</h2>
          <p>{data?.explanation}</p>
        </div>
        <button onClick={onToggleDetails}>
          <i className="fa fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
