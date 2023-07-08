const Button = (props) => {
  //  Write your code here.
  const { className, buttonText } = props;
  return <button className={`button ${className}`}>{buttonText}</button>;
};

const element = (
  //  Write your code here.
  <div className="social-bg-container">
    <h1 className="title">Social Buttons</h1>
    <div className="btn-container">
      <Button className="social-btn-like" buttonText="Like" />
      <Button className="social-btn-comment" buttonText="Comment" />
      <Button className="social-btn-share" buttonText="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
