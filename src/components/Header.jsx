import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import reactlogo from "../assets/react.svg";

const Header = () => {
  return (
    <Container>
        <Image fluid src={reactlogo} width="250px" className="mt-4"></Image>
    </Container>
  )
}

export default Header