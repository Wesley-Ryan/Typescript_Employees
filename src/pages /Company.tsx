import { useHistory } from "react-router-dom";

const CompanyPage: React.FC = () => {
  const history = useHistory();
  return (
    <div>
      <h1>We are not home.... </h1>
      <p>
        Unfortuantley MNTN is not a real company. But you can learn more about
        the developer.
      </p>
      <a
        href="https://wesleyryan.dev"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>Wesley Ryan</p>
      </a>
      <button onClick={() => history.goBack()}>Go Back?</button>
    </div>
  );
};

export default CompanyPage;
