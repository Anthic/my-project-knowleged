import Profile from "../../assrets/images/profile.png";
const Header = () => {
  return (
    <div className="w-11/12 mx-auto flex justify-between items-center py-4 border-b-2 border-[#11111126]">
      <h1 className="text-3xl font-bold">Knowledge Cafe</h1>
      <img src={Profile} alt="" />
    </div>
  );
};

export default Header;
