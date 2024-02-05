

export default function Sidebaritem({name, handleclick,active}){
    return(
        <button className={`sidebar-item ${active?'active':''}`} onClick={handleclick}>
        {name}
        </button>
    )
}