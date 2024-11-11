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
      <h1 className=" text-3xl font-bold">My contacts</h1>
      <div className="flex items-center justify-center gap-10">
        <a
          className=" hover:cursor-pointer"
          href="mailto:sujithkarthikaiselvan@gmail.com"
        >
          <EmailIcon />
        </a>
        <a
          className=" hover:cursor-pointer"
          href="whatsapp://send?text=Hello There!&phone=+918838295978"
        >
          <WhatsAppIcon />
        </a>
        <a
          className=" hover:cursor-pointer"
          href="https://github.com/Sujith0604"
        >
          <GitHubIcon />
        </a>
        <a
          className=" hover:cursor-pointer"
          href="https://www.linkedin.com/in/sujith-karthikaiselvan-182450208/"
        >
          <LinkedInIcon />
        </a>
        <a className=" hover:cursor-pointer" href="tel:+918838295978">
          <CallIcon />
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
