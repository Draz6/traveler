import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import '../styles/Footer.css'

export default function Footer() {
    return (
        <div>
            <div id="contanier">
                <ul id="socialIcons"> 
                    <li><a href="https://instagram.com/"><InstagramIcon className="footer" /></a></li>
                    <li><a href="https://www.linkedin.com/"><LinkedInIcon className="footer" /></a></li>
                    <li><a href="https://X.com/"><XIcon className="footer" /></a></li>
                    <li><a href="https://www.facebook.com/"><FacebookIcon className="footer" /></a></li>
                </ul>
                <p id="line"></p>
                <p id="copy">copy &copy; DR&forall;Z&trade; 2024</p>
            </div>
        </div> 
    )
}