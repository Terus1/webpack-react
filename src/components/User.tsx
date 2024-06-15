import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import "../styles/User.css"
import PropTypes from "prop-types";


function User(props) {
  const [selected, changeSelected] = useState(false);
  return (
    <tr className={selected ? "selected-user" : ""}>
      <td>{props.name}</td>
      <td>{props.username}</td>
      <td>{props.email}</td>
      <td>
        {selected ?
          <Button variant="danger" onClick={() => changeSelected(false)}> Remove </Button> :
          <Button variant="success" onClick={() => changeSelected(true)}> Add </Button>
        }

      </td>
    </tr>
  )
}

User.defaultProps = {
  email: "Empty"
}

User.propTypes = {
  user: PropTypes.object
};

export default User;
