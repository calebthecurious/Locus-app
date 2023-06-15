import React from 'react'
import SkillCard from './SkillCard'

export default function Skills() {
    return (
        <main className="bg-white mt-5">
            <div className="">
                <div className="mt-4 pb-1 mb-1">
                <h1 className="font-bold text-4xl">
                    Catalogue
                </h1>
                </div>
                <div className="flex flex-wrap justify-between">
                <SkillCard />
                </div>
            </div>
        </main>
    )
    }
