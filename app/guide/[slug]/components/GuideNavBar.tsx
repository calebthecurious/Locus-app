import Link from "next/link";

export default function GuideNavBar({slug}: { slug: string}) {
    return (
        <nav className="flex text-reg border-b pb-2">
            <Link href={`/guide/${slug}`} className='mr-7'>Overview</Link>
            <Link href={`/guide/${slug}/skills`} className='mr-7'>Skills</Link>
        </nav>
        
    )
}