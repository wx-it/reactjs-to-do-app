import "./createTask.css";
import { BsFilter } from "react-icons/bs";
import { TbArrowsSort } from "react-icons/tb";
import Select from "react-select";

const CreateTask = ({ modalOpen, open, close }) => {
  const sortOptions = [
    { value: "Date created", label: "Date created" },
    { value: "All", label: "All" },
    { value: "Recently added", label: "Recently added" },
    { value: "a to z", label: "a to z" },
  ];

  return (
    <div className="creating-tasks">
      <div className="sort">
        <div className="sort-title">
          <TbArrowsSort />
          <p>Sort</p>
        </div>

        <Select
          options={sortOptions}
          defaultValue={sortOptions[0]}
          isSearchable={false}
          styles={{
            control: () => ({
              width: "9.37rem",
              fontSize: "12px",
              padding: "0",
              backgroundColor: "transparent",
              border: "none",
              color: "white",
              outline: "none",
            }),
            dropdownIndicator: () => ({
              display: "none",
            }),
            indicatorSeparator: () => ({
              display: "none",
            }),
            menuList: () => ({
              fontSize: "12px",
              color: "white",
              backgroundColor: "rgba(57, 60, 68, 1)",
            }),
            option: (baseStyles) => ({
              ...baseStyles,
              margin: "none",
              height: "100%",
            }),
            singleValue: (baseStyles) => ({
              ...baseStyles,
              color: "white",
            }),
          }}
          theme={(theme) => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              primary25: "rgba(33, 123, 207, 1)",
              primary: "black",
            },
          })}
        />
      </div>

      <button onClick={() => (modalOpen ? close() : open())}>Add Task</button>
    </div>
  );
};

export default CreateTask;
