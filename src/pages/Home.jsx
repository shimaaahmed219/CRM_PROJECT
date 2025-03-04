
import logo from "../assets/Mobica 1.svg"
import Statistics from "../components/home/Statistics"
function Home() {
  return (
    <div className="w-full min-h-screen bg-black 2xl:py-[50px] py-[30px] md:px-[32px] sm:px-[10px] px-[17px]">
      <img src={logo} alt="logo" className="2xl:w-[203px] w-[150px]"/>
<Statistics/>
    </div>
  )
}

export default Home