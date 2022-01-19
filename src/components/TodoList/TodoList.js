import React from "react";
import check from "../../img/checked.png";
import edit from "../../img/edit.png";
import trush from "../../img/trash-bin.png";
import "./TodoList.scss";
import { useNavigate, Link } from "react-router-dom";
function TodoList({ people, setpeople, setEditPeople }) {
  let navigate = useNavigate();

  // backToForm()
  const onDeleteHandler = ({ ID }) => {
    const deletedPerson = people.filter((prs) => {
      return prs.ID !== ID;
    });
    // console.log(deletedPerson)
    setpeople(deletedPerson);
  };
  const onEditPeopleHandler = (pers) => {
    const updatedPerson = people.find((person) => {
      navigate("/");
      return person === pers;
    });
    // const onEditPeopleHandler = ({ ID }) => {
    //   const updatedPerson = people.find((person) => {
    //     navigate("/");
    //     return person.ID === ID;
    //   });
    setEditPeople(updatedPerson);
  };
  return (
    <div>
      {people.map((pers) => {
        return (
          <main key={pers.ID} className="leaderboard__profiles">
            <article className="leaderboard__profile">
              <img
                src="https://randomuser.me/api/portraits/men/97.jpg"
                alt="Dustin Moskovitz"
                className="leaderboard__picture"
              />
              <div className="leaderboard__profile-box">
                <span className="leaderboard__name">{pers.username}</span>
                <span className="leaderboard__name--email">{pers.email}</span>
              </div>
              <div>
                <span className="leaderboard__value">
                  <img src={check} alt="check" />
                </span>
                <span className="leaderboard__value">
                  <img
                    src={edit}
                    alt="edit"
                    onClick={() => onEditPeopleHandler(pers)}
                  />
                </span>
                <span className="leaderboard__value">
                  <img
                    src={trush}
                    alt="trush"
                    onClick={() => onDeleteHandler(pers)}
                  />
                </span>
              </div>
            </article>
          </main>
        );
      })}
      {/* <button onClick={() => backToForm} className="lbtn" >Back</button> */}
      <Link
        to="/"
        state={{
          state:people
        }}
      >
        <button className="lbtn">Back</button>
      </Link>
    </div>
  );
}

export default TodoList;
