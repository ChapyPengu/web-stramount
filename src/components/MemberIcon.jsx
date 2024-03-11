
function MemberIcon({ name, lastname, alias, imgPath, github, linkedin }) {
  
  return (
    <div className="">
        <div className="flex flex-col gap-1 items-center">
            <img
            className="w-32 h-32 rounded-full object-cover"
            src={imgPath} alt={alias} />
            <h4 className="text-xs capitalize">{name} {lastname}</h4>
            <p className="text-xs text-gray-500">{alias}</p>
            <div className="flex gap-3 mt-1">
                <a target="_blank" href={github}><i className="text-zinc-900 hover:text-blue-400 text-2xl cursor-pointer fa-brands fa-github"></i></a>
                <a target="_blank" href={linkedin}><i className="text-zinc-900 hover:text-blue-400 text-2xl cursor-pointer fa-brands fa-linkedin"></i></a>
            </div>
        </div>
    </div>
  )
}

export default MemberIcon