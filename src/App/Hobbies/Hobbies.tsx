import { Breadcrumb } from "react-bootstrap";
import './Hobbies.scss';
import Typing from "./Typing/Typing";

function Hobbies() { 

  return (
    <>
      <div className="nothing-container">
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item href="/">&lt;Back</Breadcrumb.Item>
        </Breadcrumb>
        <Typing />
      </div>
    </>
  )
}

export default Hobbies