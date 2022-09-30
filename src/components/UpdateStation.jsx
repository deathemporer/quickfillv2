import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import NavbarAdmin from "./NavbarAdmin";
import { useMutation, gql, useQuery } from "@apollo/client";
import DropDown from "./DropDown";

const UPDATE_STATION = gql`
  mutation UPDATE_STATION($station: stationInput!) {
    updateStation(station: $station) {
      stid

      sname

      sloc

      latitude

      longitude

      price
    }
  }
`;

function UpdateStation() {
  const [updateStat, { data, loading, error }] = useMutation(UPDATE_STATION);

  if (loading) return "Submitting...";

  if (error) return `Submission error! ${error.message}`;

  const handleSubmitTwo = (event) => {
    event.preventDefault();

    updateStat({
      variables: {
        station: {
          stid: parseInt(document.getElementById("dropdown").value),

          sname: document.getElementById("input8").value,

          sloc: document.getElementById("input9").value,

          latitude: parseFloat(document.getElementById("input10").value),

          longitude: parseFloat(document.getElementById("input11").value),

          price: parseFloat(document.getElementById("input12").value),
        },
      },
    });
  };
  return (
    <>
      <NavbarAdmin />

      <Form
      onSubmit={handleSubmitTwo}
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
        <h3 style={{ paddingBottom: "10px" }}>Update Station Details</h3>
        <DropDown  />
        <br /><br />
        <Form.Group
          className="mb-3"
          controlId="Addform"
          style={{ margintop: "10px" }}
        >
          <Form.Control
            placeholder="Enter station name"
            style={{ width: "590px" }}
            id="input8"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="Addform">
          <Form.Control
            placeholder="Enter station location"
            style={{ width: "590px" }}
            id="input9"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="Addform">
          <Form.Control
            placeholder="Enter latitude"
            style={{ width: "590px" }}
            id="input10"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="Addform">
          <Form.Control
            placeholder="Enter Longitude"
            style={{ width: "590px" }}
            id="input11"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="Addform">
          <Form.Control placeholder="Enter Price" style={{ width: "590px" }} id="input12"/>
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          style={{ marginTop: "20px", width: "590px" }}
        >
          Update
        </Button>
      </Form>
    </>
  );
}

export default UpdateStation;
