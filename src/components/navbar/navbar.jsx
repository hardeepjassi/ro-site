import { Col, Container, Row } from "react-bootstrap";
import Navbaricon from "./navbaricon";
import './navbar.css'
export default function Navbar(props){
	return(
		<Container className="bg-colr ">
			<Row className="pt-2 g-0">
				<Col>
				<Navbaricon headingName="Ro hi Ro" />
				</Col>

			</Row>
		</Container>
	
	);
}