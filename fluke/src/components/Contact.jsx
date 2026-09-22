import { FaArrowRight, FaEnvelope, FaGithub, FaInstagram } from "react-icons/fa";

const contactLinks = [
  {
    label: "Email",
    value: "hlakdee7403@gmail.com",
    href: "mailto:hlakdee7403@gmail.com",
    icon: FaEnvelope,
  },
  {
    label: "GitHub",
    value: "github.com/Korrakit102",
    href: "https://github.com/Korrakit102",
    icon: FaGithub,
  },
  {
    label: "Instagram",
    value: "instagram.com/135_kit",
    href: "https://www.instagram.com/135_kit/",
    icon: FaInstagram,
  },
];

function Contact() {
  return (
    <section id="contact" className="section contact-section reveal" aria-labelledby="contact-title">
      <div className="section-inner contact-layout">
        <div>
          <p className="section-kicker">Contact</p>
          <h2 id="contact-title" className="section-title">Let's Build Useful Software</h2>
          <p>
            I am currently looking for new opportunities in software engineering, full-stack
            development, and software testing.
          </p>
        </div>

        <div className="contact-links">
          {contactLinks.map(({ label, value, href, icon: Icon }) => (
            <a
              className="contact-link"
              href={href}
              key={label}
              target={label === "Email" ? undefined : "_blank"}
              rel={label === "Email" ? undefined : "noopener noreferrer"}
            >
              <Icon aria-hidden="true" />
              <span>
                <strong>{label}</strong>
                <small>{value}</small>
              </span>
              <FaArrowRight aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
