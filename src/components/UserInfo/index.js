import React, { useContext } from "react";
import { UserContext } from "../../Providers/UserProvider";
import "./style.css";

const UserInfo = () => {
  const user = useContext(UserContext);
  const { photoURL, displayName, email } = user;
  console.log(user);

  return (
    <div class="media">
      <img src={photoURL} class="rounded-circle user" alt="userImage" />
      <div class="media-body">
        <h5 class="mt-0">{displayName}</h5>
        {email}
      </div>
    </div>
  );
};

export default UserInfo;