import Link from "next/link"

export default function footer({ member }) {
    return(
        <>
            <footer className="bg-light text-center text-lg-start">
  
                <div className="container p-4">
                    
                    <div className="row">
                   
                    <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Rechtliches</h5>

                        <ul className="list-unstyled mb-0">
                        <li>
                            <Link href="/imprint">
                                <a className="text-dark">Impressum</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/privacy">
                                <a className="text-dark">Datenschutz</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                <a className="text-dark">Kontakt</a>
                            </Link>
                        </li>
                        </ul>
                    </div>
                   
                    </div>
                </div>
               
                <div className="text-center p-3">
                    © 2022 Copyright
                    <a className="text-decoration-none"> Team HelloWorld</a>
                </div>
               
                </footer>
        </>
    )
}