import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function SubmitButton(event) {
    props.onAdd(note);
    setNote({ title: "", content: "" });
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  const isNoteEmpty = note.title.trim() === "" && note.content.trim() === "";

  return (
    <div>
      <form className="create-note">
        {isExpanded ? (
          <input
            onChange={handleChange}
            name="title"
            value={note.title}
            placeholder="Title"
          />
        ) : null}
        <textarea
          onClick={expand}
          onChange={handleChange}
          name="content"
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <button onClick={SubmitButton} disabled={isNoteEmpty}>
          <AddIcon />
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
