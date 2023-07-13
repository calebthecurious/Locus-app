import { PrismaClient } from "@prisma/client";
import GuideNavBar from "../components/GuideNavBar";
import skills from "../components/Skills";
import Skills from "../components/Skills";

const prisma = new PrismaClient();

const fetchGUideSkills = async (slug: string) => {
    const guide = await prisma.guide.findUnique({
        where: {
            slug
        },
        select: {
            skills: true
        }
    })
    if(!guide){
        throw new Error
    }

    return guide.skills
}

export default async function SkillsMenu({
    params,
}: {
    params: { slug: string };
}) {
    const skill = await fetchGUideSkills(params.slug)

    return (
        <>
            <div className="bg-white w-[100%] rou nded p-3 shadow">
                <GuideNavBar slug={params.slug}/>
                <Skills skills={skill}/>
            </div>
        </>
    )
}