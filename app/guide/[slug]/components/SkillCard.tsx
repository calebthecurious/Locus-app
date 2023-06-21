import { Skill } from '@prisma/client'
import React from 'react'

export default function SkillCard({skill}: {skill: Skill}) {
    return (
        <div className="border rounded p-3 w-[49%] mb-3">
            <h3 className="font-bold text-lg">
            {skill.name}
            </h3>
            <p className="font-light mt-1 text-sm">{skill.description}</p>
            <p className="mt-7">{skill.price}</p>
    </div>
    )
}
