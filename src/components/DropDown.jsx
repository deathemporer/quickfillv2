import Dropdown from "react-bootstrap/Dropdown";

import DropdownButton from "react-bootstrap/DropdownButton";

import { gql, useMutation, useQuery } from "@apollo/client";
import "./DropDownOne.css";

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

export default function DropDown() {
  const { loading, error, data } = useQuery(GET_STATIONS);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :(</p>;

  console.log(data);

  let optionItems = data.station.map(
    ({ stid, sname, sloc, latitude, longitude, price }) => (
      /* <Dropdown.Item id={stid} value={stid}>{stid}</Dropdown.Item> */

      <option value={stid} id="select1">{stid}</option>
    )
  );

  return <select id="dropdown">{optionItems}</select>;
}
