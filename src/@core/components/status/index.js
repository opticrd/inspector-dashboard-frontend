import { Abierto, EnProgreso, Finalizado } from "../../../constants/Status/statusTickets"

export const StatusTickets = (status) => {

    const changeColor = () => {
        if (status === EnProgreso) return "#3498DB"
        else if (status === Abierto) return "#5ECB08"
        else if (status === Finalizado) return "#CFCFCF"
        else return null
    }

    const sytleStatus = {
        width: '10px',
        height: '10px',
        borderRadius: '2px',
        display: 'inline-block',
        marginRight: '7px',
        background: changeColor()
    }

    return (
        <>
            <span 
                style={sytleStatus}    
            />
            <span className="text-truncate">{status}</span>
        </>
    )
}
