export default function ArchiveLayout({ children, archive, latest}){
    return(
        <div>
            {/* {children} */}
            <h1>News Archive</h1>
            <section id='archive-filter'>
                {archive}
            </section>
            <section id='latest-filter'>
                {latest}
            </section>
        </div>
    )
}