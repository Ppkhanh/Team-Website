import Link from "next/link";
import Header from "../components/Header";

export default function imprint() {
    return(
        <>
            <div className="text-center p-5 text-white">
                
                    <h2> Impressum </h2>
                    <h3> Betreiber: Max Mustermann </h3>
                        <p> Beispielweg 3</p>
                        <p> 50887 Musterhausen</p>
                        <p>Deutschland</p>
                    
                    <h3> Kontakt </h3>
                        <p>Telefon: 0221 4700</p>
                        <p>Email: max@mustermann.de</p>
                        <p>Fax: +49 221 470 5095</p>

                    <h3> UsT.-ID Nummer </h3>
                        <p>§27a Umsatzsteuergesetz: DE 12345678</p>
                        
            </div>
        </>
    )
}