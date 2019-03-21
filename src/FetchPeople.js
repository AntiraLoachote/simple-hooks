import React, { useEffect, useState } from "react";
export const FetchPeople = ({ userId, fetchUser }) => {
  const [user, setUser] = useState();
  useEffect(() => {
    fetchUser().then(res => {
      setUser(res.data);
    });
  }, [fetchUser]);
  return <p>{user ? user.name : "No user"}</p>;
};
