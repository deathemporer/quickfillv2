import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "./OurTeam.css";

function OurTeam() {
  return (
    <>
      <div id="header">
        <h1 style={{color:"black"}}>Our Team</h1>
      
      <CardGroup style={{width:"90%", marginLeft:"5%", height:"400px", marginTop:"30px"}}>
        <Card bg="dark" variant="dark">
          <Card.Img
            variant="top"
            src="https://pwco.com.sg/wp-content/uploads/2020/05/Generic-Profile-Placeholder-v3.png"
          />
          <Card.Body bg="dark">
            <Card.Title>Meher Satya Dhiren</Card.Title>
            <Card.Text>
              SE - Cloud
            </Card.Text>
          </Card.Body>
        </Card>
        <Card bg="dark" variant="dark">
          <Card.Img
            variant="top"
            src="https://pwco.com.sg/wp-content/uploads/2020/05/Generic-Profile-Placeholder-v3.png"
          />
          <Card.Body>
            <Card.Title>Allen Saldanha</Card.Title>
            <Card.Text>
              NSE
            </Card.Text>
          </Card.Body>
        </Card>
        <Card bg="dark" variant="dark">
          <Card.Img
            variant="top"
            src="https://pwco.com.sg/wp-content/uploads/2020/05/Generic-Profile-Placeholder-v3.png"
          />
          <Card.Body>
            <Card.Title>Nitin Sharma</Card.Title>
            <Card.Text>
              SE- ServiceNow
            </Card.Text>
          </Card.Body>
        </Card>
        <Card bg="dark" variant="dark">
          <Card.Img
            variant="top"
            src="https://pwco.com.sg/wp-content/uploads/2020/05/Generic-Profile-Placeholder-v3.png"
          />
          <Card.Body>
            <Card.Title>Aathira Nair</Card.Title>
            <Card.Text>
              SE - Cloud
            </Card.Text>
          </Card.Body>
        </Card>
        <Card bg="dark" variant="dark">
          <Card.Img
            variant="top"
            src="https://pwco.com.sg/wp-content/uploads/2020/05/Generic-Profile-Placeholder-v3.png"
          />
          <Card.Body>
            <Card.Title>Priyanshi Jain</Card.Title>
            <Card.Text>
              SE - ServiceNow
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      </div>
    </>
  );
}

export default OurTeam;
