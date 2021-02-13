const Logout = (props) => {
  const kill = () => {
    localStorage.removeItem("user");
  };
  return (
    <button
      onClick={() => {
        kill();
        props.setIsAuthenticated(false);
      }}
    >
      Logout
    </button>
  );
};

export default Logout;
