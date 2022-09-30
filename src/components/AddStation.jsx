import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import NavbarAdmin from "./NavbarAdmin";
import { useMutation, gql } from "@apollo/client";
const ADD_STATION = gql`
  mutation ADD_STATION($station: stationInput!) {
    createStation(station: $station) {
      stid

      sname

      sloc

      latitude

      longitude

      price
    }
  }
`;

function AddStation() {
  const [addStat, { data, loading, error }] = useMutation(ADD_STATION);

  if (loading) return "Submitting...";

  if (error) return `Submission error! ${error.message}`;

  const handleSubmitOne = (event) => {
    console.log(parseInt(document.getElementById("input1").value));

    event.preventDefault();

    addStat({
      variables: {
        station: {
          stid: parseInt(document.getElementById("input1").value),

          sname: document.getElementById("input2").value,

          sloc: document.getElementById("input3").value,

          latitude: parseFloat(document.getElementById("input4").value),

          longitude: parseFloat(document.getElementById("input5").value),

          price: parseFloat(document.getElementById("input6").value),
        },
      },
    });
  };
  return (
    <>
      <NavbarAdmin />
      <div
        id="container"
        style={{ width: "60%", marginLeft: "20%", backgroundColor: "red" }}
      >
        <Form
        onSubmit={handleSubmitOne}
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
            marginTop: "-50px",
          }}
        >
          <h3>Add New Station</h3>
          <Form.Group
            className="mb-3"
            controlId="Addform"
            style={{ width: "100%" }}
          >
            <Form.Control
              placeholder="Enter station id"
              style={{ width: "590px" }}
              id="input1"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="Addform">
            <Form.Control
              placeholder="Enter station name"
              style={{ width: "590px" }}
              id="input2"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="Addform">
            <Form.Control
              placeholder="Enter station location"
              style={{ width: "590px" }}
              id="input3"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="Addform">
            <Form.Control
              placeholder="Enter latitude"
              style={{ width: "590px" }}
              id="input4"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="Addform">
            <Form.Control
              placeholder="Enter Longitude"
              style={{ width: "590px" }}
              id="input5"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="Addform">
            <Form.Control
              placeholder="Enter Price"
              style={{ width: "590px" }}
              id="input6"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="Addform">
            <Button
              variant="primary"
              type="submit"
              style={{ marginTop: "20px", width: "590px" }}
            >
              Add
            </Button>
          </Form.Group>
        </Form>
      </div>
    </>
  );
}

export default AddStation;
