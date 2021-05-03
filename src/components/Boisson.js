import React, {useState, useEffect} from "react"
import {useParams} from 'react-router-dom'
import Table from "react-bootstrap/Table";
import axios from "./AxiosInterceptor";

const Boisson = () => {
    const [boisson, setBoisson] = useState({})
    const {id} = useParams()

    useEffect(() => {
        const fetchData = async () => {
            await axios.get(`api/boissons/${id}`)
                .then((response) => {
                    console.log(response)
                    setBoisson(response.data)
                }, (error) => {
                    console.log(error)
                });
        };
        fetchData();
    }, [id]);


    if (boisson) {
        return (
            <div className="container">
                <h3>Boisson : {boisson.titre} </h3>
                <Table> {//table est un composant react bootstrap
                }
                    <tbody>
                    <tr>
                        <td>Description</td>
                        <td>{boisson.description}</td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        )
    } else {
        return <div className="container">
            En chargement...
        </div>
    }

}
export default Boisson
