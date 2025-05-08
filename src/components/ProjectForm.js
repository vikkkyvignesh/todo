import React from "react";

const ProjectForm = ({
  handleSubmit,
  heading,
  value,
  setValue,
  setShowModal,
  confirmButtonText,
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit} className="projectForm">
        <h3>{heading}</h3>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="Project name..."
          autoFocus
        />

        <button
          className="cancel"
          role="button"
          onClick={() => setShowModal(false)}
        >
          Cancel
        </button>

        <button className="confirm">{confirmButtonText}</button>
      </form>
    </div>
  );
};

export default ProjectForm;
