import { FaLinkedin  } from 'react-icons/fa';
import { FaEnvelope } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";

function ContactWidget() {
  return (
    <div id="social">
      <div className="flex-head">
        <FaShareAlt/>
        <h2>Connect</h2>
      </div>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/annefonicello/" target="_blank">
            <FaLinkedin/>
            LinkedIn
          </a>
        </li>
        <li>
          <a href="mailto:anne.fonicello%40gmail.com?subject=I%20want%20to%20connect" target="_blank">
            <FaEnvelope/>
            Email
          </a>
        </li>
      </ul>
    </div>

  );
}
export default ContactWidget;