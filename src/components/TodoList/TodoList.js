import React from "react";
import check from "../../img/checked.png"
import edit from "../../img/edit.png"
import trush from "../../img/trash-bin.png"
import "./TodoList.scss";
function TodoList({people, setpeople}) {
  const onDeleteHandler = ({ID}) =>{
    const deletedPerson = people.filter(prs => {
      return prs.ID !== ID
    })
    setpeople(deletedPerson)
  }
  return (
    <div>
      {people.map(pers =>{
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
            <img src={check} alt="check"/>
            </span>
            <span class="leaderboard__value">
            <img src={edit} alt="edit"/>
            </span>
            <span class="leaderboard__value">
            <img src={trush} alt="trush" onClick={() => onDeleteHandler(pers)}/>
            </span>
          </div>
        </article>
      </main>
        )
      }) }
    </div>
  );
}

export default TodoList;
