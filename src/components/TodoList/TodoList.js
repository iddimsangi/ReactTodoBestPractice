import React from "react";
import check from "../../img/checked.png"
import edit from "../../img/edit.png"
import trush from "../../img/trash-bin.png"
import "./TodoList.scss";
function TodoList() {
  return (
    <div>
      <main class="leaderboard__profiles">
        <article class="leaderboard__profile">
          <img
            src="https://randomuser.me/api/portraits/men/97.jpg"
            alt="Dustin Moskovitz"
            class="leaderboard__picture"
          />
          <div className="leaderboard__profile-box">
            <span class="leaderboard__name">Dustin Moskovitz</span>
            <span class="leaderboard__name--email">Dustin@Moskovitz.ke</span>
          </div>
          <div>
            <span class="leaderboard__value">
            <img src={check} alt="check"/>
            </span>
            <span class="leaderboard__value">
            <img src={edit} alt="edit"/>
            </span>
            <span class="leaderboard__value">
            <img src={trush} alt="trush"/>
            </span>
          </div>
        </article>
      </main>
    </div>
  );
}

export default TodoList;
