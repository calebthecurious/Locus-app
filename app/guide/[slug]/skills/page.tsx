import { PrismaClient } from "@prisma/client";
import GuideNavBar from "../components/GuideNavBar";
import Skills from "../components/Skills";

const prisma = new PrismaClient();

const fetchGUideSkills = async (slug: string) => {
    const guide = await prisma.guide.findUnique({
        where: {
            slug
        },
        select: {
            Skills: true
        }
    })
    if(!guide){
        throw new Error
    }

    return guide.Skills
}

export default async function SkillsMenu({
    params,
}: {
    params: { slug: string };
}) {
    const skill = await fetchGUideSkills(params.slug)
    console.log({ Skills })
    return (
        <>
            <div className="bg-white w-[100%] rou nded p-3 shadow">
                <GuideNavBar slug={params.slug}/>
                <Skills skills={skill}/>
            </div>
        </>
    )
}