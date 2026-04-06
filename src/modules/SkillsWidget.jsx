import { FaCode } from "react-icons/fa";

function SkillsWidget() {
    return ( 
        <div id="skills-list">
            <div className="flex-head">
                <FaCode className="headerIcon" />
                <h2>Skill Highlights</h2>
            </div>
            <ul>
                <li>
                    <p>8+ Years Programming</p>
                </li>
                <li>
                    <p>JavaScript</p>
                </li>
                <li>
                    <p>React</p>
                </li>
                <li>
                    <p>Vue.js</p>
                </li>
                <li>
                    <p>Angular.js</p>
                </li>
                <li>
                    <p>ASP.Net</p>
                </li>
                <li>
                    <p>Node.js</p>
                </li>
                <li>
                    <p>GraphQL</p>
                </li>
                <li>
                    <p>Agile Development Ideologies</p>
                </li>
            </ul>
        </div>
    );
}
export default SkillsWidget;