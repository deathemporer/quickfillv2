import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Table from "react-bootstrap/Table";
import Tabs from "react-bootstrap/Tabs";
import NavbarAdmin from "./NavbarAdmin";
import { gql, useQuery } from "@apollo/client";

const GET_STATIONS = gql`
  query GetStations {
    station {
      stid

      sname

      sloc

      latitude

      longitude

      price
    }
  }
`;

const stationData = {
  stations: [
    { id: 1, price: 200, name: "HSR", location: "HSR Layout, Bangalore" },
    { id: 2, price: 106, name: "Sarjapur", location: "HSR Layout, Bangalore" },
    {
      id: 3,
      price: 210,
      name: "Whitefield",
      location: "HSR Layout, Bangalore",
    },
    {
      id: 4,
      price: 500,
      name: "Koramangala",
      location: "HSR Layout, Bangalore",
    },
  ],
};

function ViewDetails() {
  //window.location.reload();
  const { loading, error, data } = useQuery(GET_STATIONS);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :(</p>;
  return (
    <>
      <NavbarAdmin />
      <Table
        variant="dark"
        striped
        bordered
        hover
        style={{
          textAlign: "center",
          width: "70%",
          marginLeft: "15%",
          marginRight: "15%",
          marginTop: "50px",
        }}
      >
        <thead>
          <tr>
            <th colSpan={4} style={{ textAlign: "center" }}>
              <h3>All Stations</h3>
            </th>
          </tr>
        </thead>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Location</th>
            <th>Price/ltr</th>
          </tr>
        </thead>
        <tbody>
          {data.station.map(({stid, sname,sloc,latitude,longitude,price}) => {
            return (
              <tr>
                <td>{stid}</td>
                <td>{sname}</td>
                <td>{sloc}</td>
                <td>{price}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default ViewDetails;
