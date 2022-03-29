const Review = (props) => {
    return (
        <div className="review-container">
            <div className="single-review">
                <h3>Game: {props.name}</h3>
                <h3>User: {props.username}</h3>
                <p className="score-color">Score: {props.score}/10</p>
                <p>{props.content}</p>
            </div>
        </div>
    );
}
 
export default Review;