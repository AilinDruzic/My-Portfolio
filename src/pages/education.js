import SchoolIcon from "@mui/icons-material/School";
import BadgeIcon from "@mui/icons-material/Badge";
import DvrIcon from "@mui/icons-material/Dvr";

export default function Education() {
  return (
    <section
      id="Education"
      className="flex justify-center items-center h-screen text-3xl font-bold mt-24 font-mono"
    >
      <div className="text-center">
        <h1 className="mb-20 text-4xl">Education</h1>
        <div className="flex space-x-24">
          <div className="h-[600px] w-[350px] bg-transparent rounded-xl shadow-md border-4 border-white">
            <div className="mt-28">
              <SchoolIcon style={{ color: "secondary", fontSize: "100" }} />
            </div>
            <div className="font-medium">
              <h2 className="mt-8 mb-2">Frontend-developer <br></br>training</h2>
              <p className="mb-2">@</p>
              <p>Chas Academy</p>
              <p className="mt-10">2022-2024</p>
            </div>
          </div>
          <div className="h-[600px] w-[350px] bg-transparent rounded-xl shadow-md border-4 border-white">
            <div className="mt-28">
              <BadgeIcon style={{ color: "secondary", fontSize: "100" }} />
            </div>
            <div className="font-medium">
              <h2 className="mt-8 mb-2">Internship</h2>
              <p className="mb-2">@</p>
              <p>Talentech</p>
              <p className="mt-20">2023-2024</p>
            </div>
          </div>
          <div className="h-[600px] w-[350px] bg-transparent rounded-xl shadow-md border-4 border-white">
            <div className="mt-28">
              <DvrIcon style={{ color: "secondary", fontSize: "100" }} />
            </div>
            <div className="font-medium">
              <h2 className="mt-8 mb-2">Web-developer <br></br>course</h2>
              <p className="mb-2">@</p>
              <p>Udemy</p>
              <p className="mt-10">2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
