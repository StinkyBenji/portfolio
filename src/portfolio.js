/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Rui Zhang",
  title: "Hey'all, I'm Rui!",
  subTitle: emoji(
    "A passionate human being who thrives in dynamic environments where complex challenges arise, who loves solving problems with an analytical mindset, who is always excited to learn."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1eHJhx0i1w7zKNZMW0fGhiIZO712sbldj/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/stinkybenji",
  linkedin: "https://www.linkedin.com/in/rrrzhang/",
  gmail: "ether852@gmail.com",
  display: true
};

// Skills Section

const skillsSection = {
  title: "Skills",
  subTitle: emoji("🥸 Curiousity is the key!"),
  skills: [
    emoji(
      "⚡ A fast learner, driven by curiosity and a strong eagerness to acquire new knowledge. "
    ),
    emoji(
      "⚡ Known for high resilience and ability to quickly adapt to evolving environments and technologies."
    ),
    emoji(
      "⚡ A active listener, embracing a DevOps mindset to continuously improve and foster collaboration."
    )
  ],

  softwareSkills: [
    {
      skillName: "docker",
      deviconClassname: "fab fa-docker"
    },
    {
      skillName: "Kubernetes",
      deviconClassname: "devicon-kubernetes-plain"
    },
    {
      skillName: "Prometheus",
      deviconClassname: "devicon-prometheus-original"
    },
    {
      skillName: "Grafana",
      deviconClassname: "devicon-grafana-plain"
    },
    {
      skillName: "Argo CD",
      deviconClassname: "devicon-argocd-plain"
    },
    {
      skillName: "Helm",
      deviconClassname: "devicon-helm-plain"
    },
    {
      skillName: "Jenkins",
      deviconClassname: "devicon-jenkins-line"
    },
    {
      skillName: "insomnia",
      deviconClassname: "devicon-insomnia-plain"
    },
    {
      skillName: "git",
      deviconClassname: "devicon-git-plain"
    },

    {
      skillName: "Ansible",
      deviconClassname: "devicon-ansible-plain"
    },

    {
      skillName: "Hashicorp Vault",
      deviconClassname: "devicon-vault-original"
    },
    {
      skillName: "Tensorflow",
      deviconClassname: "devicon-tensorflow-original"
    },
    {
      skillName: "bash",
      deviconClassname: "devicon-bash-plain"
    },
    {
      skillName: "Java",
      deviconClassname: "fab fa-java"
    },
    {
      skillName: "python",
      deviconClassname: "fab fa-python"
    },
    {
      skillName: "MatLab",
      deviconClassname: "devicon-matlab-plain"
    },
    {
      skillName: "Latex",
      deviconClassname: "devicon-latex-original"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Friedrich Schiller University Jena",
      logo: require("./assets/images/unijenaLogo.jpg"),
      subHeader: "Master of Science in Medical Photonics",
      duration: "Oct 2018 - Jul 2021"
    },
    {
      schoolName: "Northeastern University",
      logo: require("./assets/images/notheasternLogo.png"),
      subHeader: "Bachelor of Science in Applied Physics",
      duration: "Oct 2014 - Jun 2018"
    }
  ]
};

const techStack = {
  viewSkillBars: false,
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Customer Success Engineer",
      company: "GitLab",
      companylogo: require("./assets/images/gitlab.png"),
      date: "Dec 2024 – Present",
      desc: "My role centers on enabling customers to realize the full value of GitLab’s DevSecOps platform. I act as a trusted technical advisor, bridging the gap between engineering teams, sales, and renewals to ensure smooth adoption and long-term success. This involves providing in-depth technical guidance and proactively aligning solutions with customer goals. Beyond reactive support, I focus on fostering collaboration across internal teams, gathering feedback from customers, and translating their needs into actionable improvements."
    },
    {
      role: "Consultant",
      company: "Red Hat",
      companylogo: require("./assets/images/redhat.png"),
      date: "Jan 2023 – Nov 2024",
      desc: "In my role, I act as a trustworthy advisor for my customers. I'm dedicated to learning new technologies to assist customers with their technical issues on demand, advocating for an Everything as Code approach to infrastructure provisioning and cloud-native development. I focus on implementing and maintaining CI/CD pipelines to streamline the software supply chain with a DevSecOps mindset, while fostering collaboration across cross-functional teams to ensure seamless and efficient operations."
    },
    {
      role: "Technical Graduate",
      company: "Red Hat",
      companylogo: require("./assets/images/redhat.png"),
      date: "Sep 2021 – Dec 2022",
      desc: "In this journey, I have acquired both theoretical knowledge and hands-on experiences in Red Hat technologies such as Ansible and OpenShift. I have effectively applied the DevOps principles as needed. Additionally, the rotating experiences through different rols as a Solution Architect, Consultant, and Technical Account Manager across different departments have enriched my perspective and skills, which has laid a solid foundation for delivering robust solutions and exceptional support to clients."
    },
    {
      role: "Research Intern",
      company: "Institute of Diagnostic and Interventional Radiology",
      companylogo: require("./assets/images/uniklinikum.png"),
      date: "Aug 2019 – Jul 2021",
      desc: "During my research internship, I played a pivotal role in collaborative research focused on analyzing MRI metrics for the diagnosis of Multiple Sclerosis (MS), a notoriously challenging disease to diagnose. Utilizing MATLAB and Python, I extracted and analyzed MRI data, optimizing and training advanced machine learning models to enhance the accuracy of statistical analyses. Our dedicated efforts aimed to construct a robust identification process, ultimately contributing to better clinical outcomes for MS patients."
    }
  ]
};

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  achievementsCards: [
    {
      image: require("./assets/images/rhca.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/22f3b885-2d47-483f-8a13-ce634e8751e5/public_url"
        }
      ]
    },
    {
      image: require("./assets/images/rhce.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/f1f3bac6-75b7-43f5-8835-fdc759d42c6a/public_url"
        }
      ]
    },
    {
      image: require("./assets/images/rhcsa.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/a6a54d55-88e3-49e1-a6c3-f4b01cea6f98/public_url"
        }
      ]
    },
    {
      image: require("./assets/images/openshiftadmin.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/689c242b-24de-48f3-af07-852eb938c4b8/public_url"
        }
      ]
    },
    {
      image: require("./assets/images/ocpinte.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/f540f1e5-3b75-4475-8901-9c686db66f15/public_url"
        }
      ]
    },
    {
      image: require("./assets/images/virt.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/00c46338-94be-450a-a582-6798b20febf6/public_url"
        }
      ]
    },
    {
      image: require("./assets/images/gitopsfund.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/b244dcf5-e7b4-49e8-acc5-187c191cd315/public_url"
        }
      ]
    },
    {
      image: require("./assets/images/gitops.png"),
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/7e2c7cc3-f4de-433d-8d90-80ff58a1885f/public_url"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for trying out cool technologies, I try to write what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://www.opensourcerers.org/2022/03/07/oops-something-is-wrong-with-your-gitops-application/",
      title: "Oops, something is wrong with your GitOps application!",
      keywords: "Argo CD | GitOps | Hashicorp Vault | Kubernetes"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  display: false
};

// Podcast Section

const podcastSection = {
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("🤝 Feel free to reach out!"),
  subtitle:
    "Out beyond ideas of wrongdoing and rightdoing there is a field. I'll meet  you there!"
};

// Twitter Section

const twitterDetails = {
  display: false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  resumeSection
};
