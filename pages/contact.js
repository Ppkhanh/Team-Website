import Link from "next/link";
import Header from "../components/Header";

export default function contact() {
    return(
        <>
            <div className="text-center p-5 text-white">
                <div className="text-center">
                    <h2>Anschrift</h2>
                    <ul className="list-unstyled">
                        <li>Musterstraße 1</li>
                        <li>12345 Köln</li>
                        <li>Deutschland/Germany</li>
                    </ul>
                </div>

                <div className="text-center">
                    <h2>So erreichen Sie uns</h2>
                    <ul className="list-unstyled">
                        <li>Telefon: 0123456789</li>
                        <li>Email: team2@helloworld.de</li>
                        <li>Fax: /</li>
                    </ul>
                </div>
            </div>
        </>
    )
}