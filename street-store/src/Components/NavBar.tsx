const NavBar = () => {
    return (
        <nav className="flex items-center justify-between  bg-zinc-800 max-w-full text-white p-4">
            <span>Street Store</span>
            <div className="flex flex-row gap-4 cursor-pointer">
                    <a>Camisetas</a>
                    <a>Moletons</a>
                    <a>Calçados</a>
                    <a>Lançamentos</a>
            </div>
            <div className="flex gap-2"><input className="rounded-xl p-1 pl-2 w-50 text-sm" placeholder="Procurar"></input>
            <span>icons</span></div>
            
        </nav>
    )
}
export default NavBar;