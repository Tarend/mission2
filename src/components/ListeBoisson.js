import React, {useState, useEffect} from "react"

import DetailBoisson from "./DetailBoisson";
import axios from "./AxiosInterceptor";


const ListeBoisson = props => {
    const [boissons, setBoissons] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            await axios.get('api/boissons')
                .then((response) => {
                    console.log(response)
                    setBoissons(response.data)
                }, (error) => {
                    console.log(error)
                });
        };
        fetchData(); // appel de la méthode créée ci dessus !
    }, []);



    return (
        <div className="container">
            <h1>Nos boissons</h1>
            <p>En choisissant la bonne boisson adaptée à vos efforts, vous progresserez encore plus vite !</p>
            <ul>
                {boissons.map(boissonAct => (
                    <DetailBoisson key={boissonAct.id} boisson={boissonAct} />
                ))}
            </ul>
        </div>
    )

}
export default ListeBoisson
