const UserCard = ({ val }) => {
  console.log(val);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {val &&
        val.map((user) => {
          return (
            <h1
              style={{
                border: "3px solid black",
                padding: "10px",
                margin: "10px"
              }}
            >
              {user.name}
            </h1>
          );
        })}
    </div>
  );
};

export default UserCard;
