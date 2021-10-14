import React from "react";
import { useParams } from "react-router-dom";

const DeleteMovieModal = (props) => {
  const { handleDelete, setShowModal, handleCancelClick } = props;
  const { id } = useParams();
  const delClick = () => {
    handleDelete(id);
    setShowModal(false);
  };
  return (
    <div id="deleteMovieModal">
      <div className="modal-dialog">
        <div className="modal-content">
          <form>
            <div className="modal-header">
              <h4 className="modal-title">Delete Movie</h4>
              <button
                onClick={handleCancelClick}
                type="button"
                className="close"
                data-dismiss="modal"
                aria-hidden="true"
              >
                &times;
              </button>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to delete these records?</p>
              <p className="text-warning">
                <small>This action cannot be undone.</small>
              </p>
            </div>
            <div className="modal-footer">
              <input
                onClick={handleCancelClick}
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
                value="Cancel"
              />
              <input
                onClick={delClick}
                type="submit"
                className="btn btn-danger"
                value="Delete"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DeleteMovieModal;
