const Footer = () => {
  const date = new Date();
  return (
    <div className="footer flex justify-center p-4 m-4">
      <h1>Akshay @ {date.getFullYear()}</h1>
    </div>
  );
};
export default Footer;
