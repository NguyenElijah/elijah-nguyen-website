import { Breadcrumb } from "react-bootstrap";
import './Hobbies.scss';
import Typing from "./Typing/Typing";

function Hobbies() { 

  return (
    <>
      <div className="hobbies-container">
        <Breadcrumb className="breadcrumb">
          <Breadcrumb.Item href="/">&lt;Back</Breadcrumb.Item>
        </Breadcrumb>
         <h1 className="hobbies-header">Hobbies</h1>
        <Typing />
      </div>
    </>
  )
}

export default Hobbies