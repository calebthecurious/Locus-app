import React from 'react'
import SkillCard from './SkillCard'
import { Skill } from '@prisma/client'

export default function Skills({skills}: {skills: Skill[]}) {
    return (
        <main className="bg-white mt-5">
            <div className="">
                <div className="mt-4 pb-1 mb-1">
                <h1 className="font-bold text-4xl">
                    Catalogue
                </h1>
                </div>
                {skills.length ? (
                <div className="flex flex-wrap justify-between">
                {skills.map(skill => (
                    <SkillCard key={skill.id} skill={skill} />
                ))}
                </div>
                ): (
                    <div className="flex flex-wrap justify-between">
                        <p>This guide does not have any skills to teach yet.</p>
                    </div>
                )}
            </div>
        </main> 
    )
    }
