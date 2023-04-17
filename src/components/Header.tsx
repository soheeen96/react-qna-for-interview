import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <h1>Header</h1>
      <Link to="/">home</Link>
      <Link to="/qna">QnA</Link>
    </>
  );
}
export default Header;
