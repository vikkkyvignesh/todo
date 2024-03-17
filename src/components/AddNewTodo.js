import React, { useContext, useEffect, useState } from "react";
import Modal from "./Modal";
import TodoForm from "./TodoForm";
import { TodoContext } from "../context";
import { items } from "./constants";
import firebase from "../firebase";
import moment from "moment";
import randomcolor from "randomcolor";
const AddNewTodo = () => {
  //context

  const { projects, selectedProject } = useContext(TodoContext);
  //STATE
  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState(" ");
  const [day, setDay] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [todoProject, setTodoProject] = useState(selectedProject);

  // const projects = [
  //   { id: 1, name: "personal", numOfTodos: 0 },
  //   { id: 2, name: "work", numOfTodos: 2 },
  //   { id: 3, name: "other", numOfTodos: 1 },
  // ];
  function handleSubmit(e) {
    e.preventDefault();
    if (text && !items.includes(todoProject)) {
      firebase
        .firestore()
        .collection("todos")
        .add({
          text: text,
          date: moment(day).format("MM/DD/YYYY"),
          day: moment(day).format("d"),
          time: moment(time).format("hh:mm A"),
          checked: false,
          color: randomcolor({ luminosity: "dark" }),
          projectName: todoProject,
        });

      setShowModal(false);
      setText("");
      setDay(new Date());
      setDay(new Date());
    }
  }

  useEffect(() => {
    setTodoProject(selectedProject);
  }, [selectedProject]);

  return (
    <div className="AddNewTodo">
      <div className="btn">
        <button
          onClick={() => {
            setShowModal(true);
          }}
        >
          + New Todo
        </button>
      </div>

      <Modal showModal={showModal} setShowModal={setShowModal}>
        <TodoForm
          handleSubmit={handleSubmit}
          heading="Add new to do!"
          text={text}
          setText={setText}
          day={day}
          setDay={setDay}
          time={time}
          setTime={setTime}
          todoProject={todoProject}
          setTodoProject={setTodoProject}
          projects={projects}
          showButtons={true}
          setShowModal={setShowModal}
        />
      </Modal>
    </div>
  );
};

export default AddNewTodo;
