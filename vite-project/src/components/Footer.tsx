import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  const openInNewTab = () => {
    window.open(
      "https://github.com/chingu-voyages/V61-tier2-team-23",
      "_blank",
      "noreferrer",
    );
  };

  return (
    <div className="h-[500px] sm:h-[20vh] bg-[#171640] text-white flex flex-col items-center text-center justify-center">
      <div
        className="mb-[30px] flex items-center text-center hover:cursor-pointer"
        onClick={openInNewTab}
      >
        <GitHubIcon />
        <p className="ml-[4px] underline">GitHub Repository</p>
      </div>
      <div className="sm:w-[800px] md:w-[800px] lg:w-[1200px] flex flex-col sm:flex-row justify-evenly">
        <div className="sm:w-[120px] md:w-[180px] lg:w-[220px] flex flex-col text-left text-[12px] lg:text-[16px]">
          <div className="underline text-[12px] lg:text-[14px]">
            Scrum Master
          </div>
          <div className="flex items-center text-center justify-between">
            <div className="text-[12px] lg:text-[18px]">Shivani Bhardwaj</div>
            <div className="ml-[20px]">
              <LinkedInIcon
                className="hover:cursor-pointer"
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/shivanibdwj",
                    "_blank",
                    "noreferrer",
                  );
                }}
              />
              <GitHubIcon
                className="hover:cursor-pointer"
                onClick={() => {
                  window.open("https://github.com/shivanibhardwaj0911", "_blank", "noreferrer");
                }}
              />
            </div>
          </div>
        </div>
        <div className="sm:w-[120px] md:w-[180px] lg:w-[220px] flex flex-col text-left text-[12px] lg:text-[16px]">
          <div className="underline text-[12px] lg:text-[14px] mt-[20px] sm:mt-[0px]">
            Product Owner
          </div>
          <div className="flex items-center text-center justify-between">
            <div className="text-[12px] lg:text-[18px]">Qudroh</div>
            <div className="ml-[20px]">
              <LinkedInIcon
                className="hover:cursor-pointer"
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/qudroh-kadejo-08ba53319/",
                    "_blank",
                    "noreferrer",
                  );
                }}
              />
              <GitHubIcon
                className="hover:cursor-pointer"
                onClick={() => {
                  window.open("https://github.com/", "_blank", "noreferrer");
                }}
              />
            </div>
          </div>
          <div className="flex items-center text-center justify-between">
            <div className="text-[12px] lg:text-[18px]">Viann Cheng</div>
            <div className="ml-[20px]">
              <LinkedInIcon
                className="hover:cursor-pointer"
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/vc01",
                    "_blank",
                    "noreferrer",
                  );
                }}
              />
              <GitHubIcon
                className="hover:cursor-pointer"
                onClick={() => {
                  window.open("https://github.com/vivchc", "_blank", "noreferrer");
                }}
              />
            </div>
          </div>
        </div>
        <div className="sm:w-[120px] md:w-[180px] lg:w-[220px] flex flex-col text-left text-[12px] lg:text-[16px]">
          <div className="underline text-[12px] lg:text-[14px] mt-[20px] sm:mt-[0px]">
            UX/UI Designer
          </div>
          <div className="flex items-center text-center justify-between">
            <div className="text-[12px] lg:text-[18px]">Lois Nkeiru</div>
            <div className="ml-[20px]">
              <LinkedInIcon
                className="hover:cursor-pointer"
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/",
                    "_blank",
                    "noreferrer",
                  );
                }}
              />
              <GitHubIcon
                className="hover:cursor-pointer"
                onClick={() => {
                  window.open("https://github.com/", "_blank", "noreferrer");
                }}
              />
            </div>
          </div>
        </div>
        <div className="sm:w-[120px] md:w-[180px] lg:w-[220px] flex flex-col text-left text-[12px] lg:text-[16px]">
          <div className="underline text-[12px] lg:text-[14px] mt-[20px] sm:mt-[0px]">
            Developers
          </div>
          <div className="flex items-center text-center justify-between">
            <div className="text-[12px] lg:text-[18px]">Matthew Neie</div>
            <div className="ml-[20px]">
              <LinkedInIcon
                className="hover:cursor-pointer"
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/matthew-neie/",
                    "_blank",
                    "noreferrer",
                  );
                }}
              />
              <GitHubIcon
                className="hover:cursor-pointer"
                onClick={() => {
                  window.open(
                    "https://github.com/MatthewNeie",
                    "_blank",
                    "noreferrer",
                  );
                }}
              />
            </div>
          </div>
          <div className="flex items-center text-center justify-between">
            <div className="text-[12px] lg:text-[18px]">Tanishq Patel</div>
            <div className="ml-[20px]">
              <LinkedInIcon
                className="hover:cursor-pointer"
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/tanishqkumarpatel",
                    "_blank",
                    "noreferrer",
                  );
                }}
              />
              <GitHubIcon
                className="hover:cursor-pointer"
                onClick={() => {
                  window.open("https://github.com/Tanishqkumarpatel", "_blank", "noreferrer");
                }}
              />
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div className="mr-[3vw]"></div>
    </div>
  );
};

export default Footer;
