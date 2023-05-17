import CategoryNav from "./CategoryNav";
import TopRatedSection from "./TopRatedSection";
import LatestSection from './LatestSection'
import TrendingSection from "./TrendingSection";

const Home = () => {
    return ( 
       <main className="home">
            <CategoryNav/>

            <TrendingSection/>
            <TopRatedSection/>
            <LatestSection/>
       </main>
     );
}
 
export default Home;