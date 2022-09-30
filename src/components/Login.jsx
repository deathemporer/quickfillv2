import React, { useState } from "react";
import "./Login.css";
import "react-bootstrap";
//import NavBar from "./NavBar";
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { Link,useNavigate } from "react-router-dom";
import { useQuery, gql, useMutation } from "@apollo/client";
//The main query


const USER_LOGIN = gql`
  query userCheck($userCreds: userInput!) {
    login(user: $userCreds)
  }
`;

//Function returning if the user credentials are correct or not, also has query variables



function emptyCheck() {
  if (
    document.getElementById("emailID_ID").value.length === 0 ||
    document.getElementById("password_ID").value.length === 0
  ) {
    return false;
  }

  return true;
}

const REGISTER_USER = gql`
  mutation addUser($userDetails: createNewUserInput!) {
    createUser(usercreate: $userDetails) {
      email

      password

      username
    }
  }
`;

//Function to check if the input boxes are empty or not

function emptyCheckReg() {
  if (
    document.getElementById("regEmailID").value.length === 0 ||
    document.getElementById("regUsername").value.length === 0 ||
    document.getElementById("regPassword").value.length === 0
  ) {
    return false;
  }

  return true;
}

function Login() {
  const navigate = useNavigate();
  const [justifyActive, setJustifyActive] = useState("tab1");
  function ValidateUser({ emailValue, passwordValue }) {
    const { loading, error, data } = useQuery(USER_LOGIN, {
      variables: {
        userCreds: {
          email: emailValue,
          password: passwordValue,
        },
      },
    });
  
    if (loading) return <p>Loading...</p>;
  
    if (error) return <p>Error :(</p>;
    console.log(data.login);
    if (data.login && emailValue==="admin@gmail.com") {
      navigate("/addStation");
    }
    else if (data.login) {
      // var passUserID = UserIDGet(emailValue);
      //the session will store the ID of the user as long as the tab isnt closed/refreshed
      window.sessionStorage.setItem("email", emailValue);
  
      //console.log(passUserID);
      navigate("/home");
    } 
    else {
      return alert("Invalid Credentials");
    }
  }

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  const [emailid, setEmail] = useState("");

  const [password, setPassword] = useState("");

  //The function that gets executed when the form is submitted

  const handleSubmitevents = (event) => {
    event.preventDefault();

    if (emptyCheck()) {
      setEmail(document.getElementById("emailID_ID").value);

      setPassword(document.getElementById("password_ID").value);
    } else {
      alert("Fields cannot be empty");
    }
  };

  //Checking if the element should be displayed or not,

  //we wont display it if the user hasnt inputted anything

  const isNotEmptyValues = () => {
    if (emailid === "" && password === "") {
      return false;
    } else return true;
  };

  const [mutateFunction, { data, loading, error }] = useMutation(REGISTER_USER);

  if (loading) return "Submitting...";

  if (error) return `Submission error! ${error.message}`;

  console.log(data);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(emptyCheckReg()){
      mutateFunction({
          variables: {
            userDetails: {
              email: document.getElementById("regEmailID").value,

              password: document.getElementById("regPassword").value,

              username: document.getElementById("regUsername").value,
            },
          },
        })
        navigate("/home");}
        //ValidateUser(document.getElementById("regEmailID").value,document.getElementById("regPassword").value );}
      else
        alert("Fields cannot be empty");
  };
  return (
    <>
      <div id="container">
        <div id="form" style={{ paddingTop: "10px", marginTop: "-40px" }}>
          <h2
            style={{ color: "black", textAlign: "center", marginTop: "10px" }}
          >
            QuickFill
          </h2>
          <p style={{ color: "black", textAlign: "center", opacity: "60%" }}>
            Login to find the nearest Gas Stations.
          </p>{" "}
          <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
            <MDBTabs
              pills
              justify
              className="mb-3 d-flex flex-row justify-content-between"
            >
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleJustifyClick("tab1")}
                  active={justifyActive === "tab1"}
                >
                  Login
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleJustifyClick("tab2")}
                  active={justifyActive === "tab2"}
                >
                  Register
                </MDBTabsLink>
              </MDBTabsItem>
            </MDBTabs>

            <MDBTabsContent>
              <MDBTabsPane show={justifyActive === "tab1"}>
                <MDBInput
                  wrapperClass="mb-4"
                  label="Email address"
                  id="emailID_ID"
                  type="email"
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="password_ID"
                  type="password"
                />

                <Link to="/home">
                  <MDBBtn
                    className="mb-4 w-100 bg-success"
                    onClick={handleSubmitevents}
                  >
                    Sign in
                  </MDBBtn>
                </Link>
              </MDBTabsPane>

              <MDBTabsPane show={justifyActive === "tab2"}>
                <MDBInput
                  wrapperClass="mb-4"
                  label="Username"
                  id="regUsername"
                  type="text"
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Email"
                  id="regEmailID"
                  type="email"
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="regPassword"
                  type="password"
                />

                <Link to="/home">
                  <MDBBtn className="mb-4 w-100 bg-success" onClick={handleSubmit}>Sign up</MDBBtn>
                </Link>
              </MDBTabsPane>
            </MDBTabsContent>
          </MDBContainer>
          {isNotEmptyValues() ? (
            <ValidateUser emailValue={emailid} passwordValue={password} />
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Login;
