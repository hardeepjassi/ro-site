import { Col, Container, Row } from "react-bootstrap";
import CardBigImg from "./cardbigimg";
import testimg from "../../assets/item-img/mdemo-sider.jpg";
import CardSmlImg from "./cardsmlimg";
import smlimgs from "../../assets/item-img/demo_300.png";
import "./card.css";
import { Link } from "react-router-dom";
import Callbtn from "./callbtn";
export default function Card() {
	return (
		<Container>
			<Row className="g-0 card-main-div mt-2">
				<CardBigImg bigImg={testimg} />
			</Row>
			<Row className="g-0 d-flex justify-content-between smlimg-div-set">
				<CardSmlImg smlImg={smlimgs} />

				<CardSmlImg smlImg={smlimgs} />

				<CardSmlImg smlImg={smlimgs} />

				<CardSmlImg smlImg={smlimgs} />

				<CardSmlImg smlImg={smlimgs} />
				
				<Callbtn/>
				
			</Row>
		</Container>
	);
}
