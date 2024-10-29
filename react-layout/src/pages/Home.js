import Tree from "../components/Tree.js"
import "../css/Home.css"

const Home = () => {
    return (
        <div className="trees">
            <Tree name="Bald Cypress" image="images/bald.jpg"/>
            <Tree name="Eastern Redbud" image="images/red.jpg"/>
            <Tree name="Live Oak" image="images/live-oak.jpg"/>
        </div>
    );
};

export default Home;