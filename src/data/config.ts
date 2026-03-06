const config = {
  title: "Manan Lall | AIML Engineer | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Manan, an AIML engineer and a full stack developer specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Manan, an AIML engineer and full stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Manan Lall",
    "portfolio",
    "AIML engineer",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Manan Lall",
  email: "workfurmanan@gmail.com",
  site: "https://personal-portfolio-lac-tau-34.vercel.app/",

  // for github stars button
  githubUsername: "Manan0p",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/Manan_0p",
    linkedin: "https://www.linkedin.com/in/mananlall/",
    instagram: "https://www.instagram.com/manan.xdd",
    // facebook: "https://www.facebook.com/HotChaddi/",
    github: "https://github.com/Manan0p",
  },
};
export { config };
