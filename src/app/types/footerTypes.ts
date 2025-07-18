export interface TextLinkSection {
  linkTitle: string;
  links: string[];
}

export interface SocialLink {
  img: string;
  link: string;
}

export interface SocialLinkSection {
  linkTitle: "Social Icons";
  links: SocialLink[];
}

export type FooterLink = TextLinkSection | SocialLinkSection;
