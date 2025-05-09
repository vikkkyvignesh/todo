import React from "react";
import { Bell, CalendarDay, Clock, Palette, X } from "react-bootstrap-icons";
import {
  DatePicker,
  TimePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const TodoForm = ({
  handleSubmit,
  heading = false,
  text,
  setText,
  day,
  setDay,
  time,
  setTime,
  todoProject,
  setTodoProject,
  projects,
  showButtons = false,
  setShowModal = false,
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <form onSubmit={handleSubmit} className="TodoForm">
        <div className="text">
          {heading && <h3>{heading}</h3>}
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="To Do..."
            autoFocus
          ></input>
        </div>
        <div className="remind">
          <Bell />
          <p>Remind me</p>
        </div>
        <div className="pick-day">
          <div className="title">
            <CalendarDay />
            <p>Choose a day</p>
          </div>
          <DatePicker value={day} onChange={(newDay) => setDay(newDay)} />
        </div>
        <div className="pick-time">
          <div className="title">
            <Clock />
            <p>Choose Time</p>
          </div>
          <TimePicker value={time} onChange={(newTime) => setTime(newTime)} />
        </div>
        <div className="pick-project">
          <div className="title">
            <Palette />
            <p>Choose Project</p>
          </div>
          <div className="projects">
            {projects.length > 0 ? (
              projects.map((project) => (
                <div
                  className={`project ${
                    todoProject === project.name ? "active" : ""
                  }`}
                  key={project.id}
                  onClick={() => setTodoProject(project.name)}
                >
                  {project.name}
                </div>
              ))
            ) : (
              <div style={{ color: "#ff0000" }}>
                Please add a project before proceeding
              </div>
            )}
          </div>
        </div>
        {showButtons && (
          <div>
            <div
              className="cancel"
              onClick={() => {
                setShowModal(false);
              }}
            >
              <X size={40} />
            </div>
            <div className="confirm">
              <button>+ Add to do</button>
            </div>
          </div>
        )}
      </form>
    </LocalizationProvider>
  );
};

export default TodoForm;
