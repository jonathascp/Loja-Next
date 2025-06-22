import Link from "next/link";
export default function Header()
{
    return(
        <header className="container-fluid bg-black py-2 d-flex flex-row justify-content-between align-items-end">
            <h1 className="h1 text-start fw-bold text-light">Loja</h1>
            <div className="d-flex flex-row justify-content-between align-items-center">
                <nav>
                    <ul className="nav d-flex flex-row justify-content-between">
                        <li className="nav-item">
                            <Link className="fs-5 text-white nav-link" href={`/`}>Início</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="fs-5 text-white active nav-link" href={`/carrinho`}>Carrinho</Link>
                        </li>
                    </ul>  
                </nav>
                {/* <button type="button" className="btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag text-light" viewBox="0 0 16 16">
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
                    </svg>
                    <p className="bg-danger text-light rounded-circle">1</p>
                </button>               */}
            
            </div>        
        </header>
    )
}