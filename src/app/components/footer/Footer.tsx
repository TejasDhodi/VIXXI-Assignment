import React from "react";
import footerLinksRaw from "@/app/data/footerLink.json";
import type { FooterLink, SocialLink } from "@/app/types/footerTypes";

const footerLinks = footerLinksRaw as FooterLink[];

const Footer = () => {
  return (
    <footer>
      <div className="footerLinks">
        {footerLinks.map(({ linkTitle, links }, index) => (
          <div className="link" key={index}>
            <h5>{linkTitle}</h5>

            {linkTitle === "Social Icons" ? (
              <div style={{ display: "flex", gap: "10px" }}>
                {(links as SocialLink[]).map((icon, idx) => (
                  <a
                    key={idx}
                    href={icon.link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={icon.img}
                      alt={`social-icon-${idx}`}
                      width={24}
                      height={24}
                    />
                  </a>
                ))}
              </div>
            ) : (
              <ul>
                {(links as string[]).map((linkText, idx) => (
                  <li key={idx}>
                    <a href="#">{linkText}</a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <p className="copyright">©2025 Serge DeNimes. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
