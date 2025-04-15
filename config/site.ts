export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "DMCI Homes | Real Estate Philippines",
  description: "Welcome to DMCI Homes' official website. Explore prime house and lots, real estate properties, and condos for sale in the Philippines. Learn more today!",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About Us",
      href: "/about",
    },
    
    {
      label: "Properties",
      href: "/properties",
    },

    {
      label: "Agent",
      href: "/agent",
    },

    {
      label: "Contact Us",
      href: "/contact",
    },
  ],

  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About Us",
      href: "/about",
    },
    {
      label: "Properties",
      href: "/properties",
    },
    {
      label: "Agent",
      href: "/agent",
    },

    {
      label: "Contact Us",
      href: "/contact",
    },
  ],

  navMenuItemsLinks: [
    {
      label: "Customer Reservation Form",
      href: "http://apps.dmcihomes.com/OnlineCRF/Main?ac=EL25650",
    },
  
    {
      label: "Set Appointment",
      href: "/appointment",
    },
    {
      label: "Room Planner",
      href: "/room-planner",
    },
    {
      label: "Loan Calculator",
      href: "/calculator",
    },
    {
      label: "Download App",
      href: "dmci-application.apk",
      download: true,
    },
    
    {
      label: "Apply Now",
      href: "/career  ",
    },


  ],
  links: {
    // submitproperty: "/submitproperty",
    crf: "http://apps.dmcihomes.com/OnlineCRF/Main?ac=EL25650",
    loancalculator: "/calculator",
    appointment: "/appointment",
    planner: "/room-planner",
    download: "dmci-application.apk",
    career: "/career",
    agent: "/agent",
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
