import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CallIcon from "@mui/icons-material/Call";
const ContactSection = () => {
  return (
    <section
      className=" h-[300px] flex flex-col items-center justify-center gap-10"
      id="contact"
    >
      <h1 className=" text-2xl">My contacts</h1>
      <div className="flex items-center justify-center gap-10">
        <a>
          <InstagramIcon />
        </a>
        <a>
          <EmailIcon />
        </a>
        <a>
          <WhatsAppIcon />
        </a>
        <a>
          <GitHubIcon />
        </a>
        <a>
          <LinkedInIcon />
        </a>
        <a>
          <CallIcon />
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
