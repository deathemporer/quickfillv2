import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import NavbarAdmin from "./NavbarAdmin";
import { useMutation, gql } from "@apollo/client";
import DropDownOne from "./DropDownOne";

const DELETE_STATION = gql`
  mutation DELETE_STATION($id: Int!) {
    deleteStation(id: $id) {
      stid
    }
  }
`;

function DeleteStation() {
  const [deleteStat, { data, loading, error }] = useMutation(DELETE_STATION);

  if (loading) return "Submitting...";

  if (error) return `Submission error! ${error.message}`;

  const handleSubmitThree = (event) => {
    console.log(parseInt(document.getElementById("dropdown").value));
    event.preventDefault();
    alert("Station Deleted");
    deleteStat({
      variables: {
       // id: parseInt(document.getElementById("dropdown").value),
       id: 1,
      },
    });
  };
  return (
    <>
      <NavbarAdmin />
      <div
        style={{
          position: "absolute",
          left: 50,
          width: "50%",
          marginLeft: "20%",
          backgroundColor: "white",
          borderRadius: "10px",
          padding: "20px",
          height: "fit-content",
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        <Form onSubmit={handleSubmitThree}>
          <h3>Delete a Station</h3>
          <DropDownOne />
          <br/>
          <Button variant="danger" type="submit" style={{ marginTop: "20px" }}>
            Delete
          </Button>
        </Form>
      </div>
    </>
  );
}

export default DeleteStation;
