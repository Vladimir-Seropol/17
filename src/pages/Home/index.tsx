import style from "./style.module.css";
import image from "../../images/animation_pinks.gif";



const Home = () => {
  return (
      < >
         <div className={style.block}>
          <img className={style.image} src={image} alt="" />
          <div className={style.text}>
            <h1>Welcome to the World jf Jelly Belly</h1>
            <h3>A Raindow of Flavors Awaits</h3>
				<p>The User Interface of this website makes full use of the API's database, showcasing one approach to design by utilizing all the endpoints and their various options. Check out the API documentation</p>
          </div>
      </div>
    </>
  );
};

export default Home;
