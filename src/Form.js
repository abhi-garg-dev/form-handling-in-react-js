import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [comment, setComment] = useState("");
  const [role, setRole] = useState("student");
  const [recommad, setRecommand] = useState("");
  const [languages, setLanguages] = useState([]);

  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      setLanguages([...languages, e.target.value]);
    } else {
      const updatedLanguage = languages.filter(
        (lang) => lang !== e.target.value
      );
      setLanguages(updatedLanguage);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const oldUser = JSON.parse(localStorage.getItem("user")) || [];
    const newUserData = {
      name: name,
      email: email,
      age: age,
      comment: comment,
      role: role,
      recommad: recommad,
      languages: languages,
    };
    const updatUser = [...oldUser, newUserData];
    localStorage.setItem("user", JSON.stringify(updatUser));
    console.log("Form submitted");
    console.log(`Name: ${name}, Email: ${email}, Age: ${age}`);
    console.log("User Data Updated", updatUser);
    setName("");
    setEmail("");
    setAge("");
    setComment("");
    setRole("student");
    setRecommand("");
    setLanguages([]);
  };

  return (
    <>
      {/* Create Form */}
      <form id="form" onSubmit={handleSubmit}>
        {/* Details */}
        <div className="form-control">
          <label htmlFor="name" id="label-name">
            Name
          </label>
          {/* Input Type Text */}
          <input
            type="text"
            id="name"
            value={name}
            placeholder="Enter your name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="form-control">
          <label htmlFor="email" id="label-email">
            Email
          </label>
          {/* Input Type Email*/}
          <input
            type="email"
            id="email"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="form-control">
          <label htmlFor="age" id="label-age">
            Age
          </label>
          {/* Input Type Text */}
          <input
            type="text"
            id="age"
            value={age}
            placeholder="Enter your age"
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </div>
        <div className="form-control">
          <label htmlFor="role" id="label-role">
            Which option best describes you?
          </label>
          {/* Dropdown options */}
          <select
            name="role"
            id="role"
            value={role}
            onchange={(e) => {
              setRole(e.target.value);
            }}
          >
            <option value="student">Student</option>
            <option value="intern">Intern</option>
            <option value="professional">Professional</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-control">
          <label>Would you recommend GeeksforGeeks to a friend?</label>
          {/* Input Type Radio Button */}
          <label htmlFor="recommed-1">
            <input
              type="radio"
              id="recommed-1"
              name="recommed"
              value="yes"
              checked={recommad === "yes"}
              onChange={(e) => setRecommand("yes")}
            />
            Yes
          </label>
          <label htmlFor="recommed-2">
            <input
              type="radio"
              id="recommed-2"
              name="recommed"
              value="no"
              checked={recommad === "no"}
              onChange={(e) => setRecommand("no")}
            />
            No
          </label>
          <label htmlFor="recommed-3">
            <input
              type="radio"
              id="recommed-3"
              name="recommed"
              value="maybe"
              checked={recommad === "maybe"}
              onChange={(e) => setRecommand("maybe")}
            />
            Maybe
          </label>
        </div>
        <div className="form-control">
          <label>
            Languages and Frameworks known
            <small>(Check all that apply)</small>
          </label>
          {/* Input Type Checkbox */}
          <label htmlFor="inp-1">
            <input
              type="checkbox"
              name="inp"
              value="C"
              checked={languages.includes("C")}
              onChange={handleCheckboxChange}
            />
            C
          </label>
          <label htmlFor="inp-2">
            <input
              type="checkbox"
              name="inp"
              value="C++"
              checked={languages.includes("C++")}
              onChange={handleCheckboxChange}
            />
            C++
          </label>
          <label htmlFor="inp-3">
            <input
              type="checkbox"
              name="inp"
              value="C#"
              checked={languages.includes("C#")}
              onChange={handleCheckboxChange}
            />
            C#
          </label>
          <label htmlFor="inp-4">
            <input
              type="checkbox"
              name="inp"
              value="Java"
              checked={languages.includes("Java")}
              onChange={handleCheckboxChange}
            />
            Java
          </label>
          <label htmlFor="inp-5">
            <input
              type="checkbox"
              name="inp"
              value="Python"
              checked={languages.includes("Python")}
              onChange={handleCheckboxChange}
            />
            Python
          </label>
          <label htmlFor="inp-6">
            <input
              type="checkbox"
              name="inp"
              value="JavaScript"
              checked={languages.includes("JavaScript")}
              onChange={handleCheckboxChange}
            />
            JavaScript
          </label>
          <label htmlFor="inp-7">
            <input
              type="checkbox"
              name="inp"
              value="React"
              checked={languages.includes("React")}
              onChange={handleCheckboxChange}
            />
            React
          </label>
          <label htmlFor="inp-7">
            <input
              type="checkbox"
              name="inp"
              value="Angular"
              checked={languages.includes("Angular")}
              onChange={handleCheckboxChange}
            />
            Angular
          </label>
          <label htmlFor="inp-7">
            <input
              type="checkbox"
              name="inp"
              value="Django"
              checked={languages.includes("Django")}
              onChange={handleCheckboxChange}
            />
            Django
          </label>
          <label htmlFor="inp-7">
            <input
              type="checkbox"
              name="inp"
              value="Spring"
              checked={languages.includes("Spring")}
              onChange={handleCheckboxChange}
            />
            Spring
          </label>
        </div>
        <div className="form-control">
          <label htmlFor="comment">Any comments or suggestions</label>
          {/* multi-line text input control */}
          <textarea
            name="comment"
            id="comment"
            placeholder="Enter your comment here"
            defaultValue={" "}
            onChange={(e) => {
              setComment(e.target.value);
            }}
          />
        </div>
        {/* Multi-line Text Input Control */}
        <button type="submit" value="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
