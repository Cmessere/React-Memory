import { CardProps } from "../Services/Types";

export const Card = ({ imageUrl, isTurned, isFound, turnCard, index }: CardProps) => {
  const cardClicked = () => {
    !isTurned && !isFound && turnCard(index);
  };
  if (isTurned || isFound)
    return (
      <div className="card">
        <img
          className="memory-image"
          alt=""
          src={imageUrl} />
      </div>
    );
  else {
    return (
      <div className="card" onClick={cardClicked}>
        <div className="empty-card">
        </div>
      </div>
    );
  }
};
