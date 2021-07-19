import { useHistory } from "react-router-dom";
import fakeLogo from "../assets/fake.jpeg";
const CompanyPage: React.FC = () => {
  const history = useHistory();
  return (
    <div
      style={{
        background: "#ffffff",
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          marginTop: "50px",
          alignSelf: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h1
          style={{
            fontSize: "40px",
          }}
        >
          Sorry... We are not home....{" "}
        </h1>

        <img src={fakeLogo} alt="Fake logo" height="200px" width="200px" />
        <p
          style={{
            fontSize: "20px",
            width: "80%",
          }}
        >
          Unfortuantley MNTN is not a real company. But you can learn more about
          the developer Here:
        </p>
        <a
          href="https://wesleyryan.dev"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            alignSelf: "center",
            textDecoration: "none",
          }}
        >
          <p
            style={{
              alignSelf: "center",
              color: "black",
              textDecoration: "none",
              fontSize: "30px",
            }}
          >
            Wesley Ryan
          </p>
        </a>
        <button onClick={() => history.goBack()}>Go Back?</button>
      </div>
    </div>
  );
};

export default CompanyPage;
