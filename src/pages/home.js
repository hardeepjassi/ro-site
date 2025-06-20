import Cardd from "../cardd/cardd";
import Card from "../components/card/card";
import Navbar from "../components/navbar/navbar";

export default function Home(){
	
	return(<>
	  {/* <div class="pre_loader">
    <h1 class="pre-loader-font">Simran Trader's</h1>
    <div class="drop-container">
      <div class="drop"></div>
    </div>
  </div> */}
			<Navbar/>
			{/* <Card/> */}
			<Cardd/>
			
	</>
	

	)

}
