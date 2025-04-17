import { Typography } from "@mui/material";
import "./style/estruturapagina.css"

const Secao = props => {
    const { titulo, children } = props;
    
    return (
    <div className="section">
        <Typography variant="h4">{titulo}</Typography>
        {children}
    </div>
    )
}

export default Secao;