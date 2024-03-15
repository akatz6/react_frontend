import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import moment from "moment";
import { useSelector } from "react-redux";

export default function Time({ time, day }) {
  const user = useSelector(state => state.auth.user)
  const [show, setShow] = useState(false);
  const [bid, setBid] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const getBid = () => {
    handleClose();
    const obj = {
      id: user.id,
      bid,
      time,
      day
    }
    console.log(obj)
  };
  return (
    <div>
      <div className="time" value={time} onClick={handleShow}></div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Make A Bid</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Date</label>
            <input
              type="text"
              className="form-control"
              value={moment(day).format("MMM Do YY")}
              disabled="disabled"
            />
            <label htmlFor="exampleInputEmail1">Time</label>
            <input
              type="text"
              className="form-control"
              value={time}
              disabled="disabled"
            />
            <label htmlFor="exampleInputEmail1">Bid</label>
            <div className="dollarSign">
              $
              <input
                type="number"
                className="form-control"
                value={bid}
                onChange={(e) =>setBid(e.target.value)}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleClose}
          >
            Close
          </button>
          <button type="button" className="btn btn-success" onClick={getBid}>
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
