import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn"; // Use MUI LinkedIn icon for consistency
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footMsg">
        <p>
          Made with &nbsp;
          <FavoriteIcon className="ftLink" aria-label="love" color="error" fontSize="small" />
          &nbsp; by Ritesh Pandey
        </p>
      </div>
      <div className="footLink">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X (Twitter) Profile"
        >
          <XIcon className="ftLink" />
        </a>
        <a
          href="https://www.linkedin.com/in/riteshkumarpandey9693/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
        >
          <LinkedInIcon className="ftLink" />
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram Profile"
        >
          <InstagramIcon className="ftLink" />
        </a>
      </div>
    </footer>
  );
}
