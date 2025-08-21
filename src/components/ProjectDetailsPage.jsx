const ProjectDetailsPage = ({ title, desc, date }) => {
    return <section className="w-full p-20">
        <h3 className="text-5xl font-bold text-stone-700 my-5">{title}</h3>
        <p className="text-slate-500 mb-5">
            {new Date(date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit",
            }).toUpperCase()}
        </p>
        <p className="text-slate-700 mb-5">{desc}</p>
        <hr className="border-b-2 border-slate-300" />
    </section>
}
export default ProjectDetailsPage;