import { Link } from "react-router-dom";

function Error() {
  return (
    <>
      <main>
        <h2>404</h2>
        <p>
          Error!
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default Error;