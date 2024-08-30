import ExperienceCard from "../components/ExperiencieCard/ExperiencieCard";
import ProfileCard from "../components/ProfileCard/ProfileCard";
import RecentProjects from "../components/RecentProjects/RecentProjects";
import SkillCard from "../components/SkillCard/SkillCard";

export default function HomePage() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 mx-auto">
            <div className="col-span-1">
                <ProfileCard />
            </div>
            <div className="col-span-1">
                <ExperienceCard />
                <SkillCard />
            </div>
            <div className="col-span-1">
                <RecentProjects />
            </div>
        </div>
    );
}
