import { Abierto, EnProgreso, Finalizado } from "../../../constants/Status/statusTickets"

export const StatusTickets = (status) => {

    const changeColor = () => {
        switch (status) {
            case EnProgreso:
                return "#3498DB"

            case Abierto:
                return "#5ECB08"

            case Finalizado:
                return "#CFCFCF"

            default: 
                return null
        }
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
