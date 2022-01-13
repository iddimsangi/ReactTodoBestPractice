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
    setpeople(deletedPerson);
  };
  const onEditPeopleHandler = ({ ID }) => {
    const updatedPerson = people.find((person) => {
      navigate("/");
      return person.ID === ID;
    });
    setEditPeople(updatedPerson);
  };
  return (
    <div>
      {people.map((pers) => {
        return (
          <main class="leaderboard__profiles">
            <article class="leaderboard__profile">
              <img
                src="https://randomuser.me/api/portraits/men/97.jpg"
                alt="Dustin Moskovitz"
                class="leaderboard__picture"
              />
              <div className="leaderboard__profile-box">
                <span class="leaderboard__name">{pers.username}</span>
                <span class="leaderboard__name--email">{pers.email}</span>
              </div>
              <div>
                <span class="leaderboard__value">
                  <img src={check} alt="check" />
                </span>
                <span class="leaderboard__value">
                  <img
                    src={edit}
                    alt="edit"
                    onClick={() => onEditPeopleHandler(pers)}
                  />
                </span>
                <span class="leaderboard__value">
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
      <Link to="/">
      <button  className="lbtn" >Back</button>
      </Link>
    
    </div>
  );
}

export default TodoList;
