const Card = ({title,desc,assignee,start,end}) => {
    return (
        <div className = "card">
            <h2 className = "title">{title}</h2>
            <div className = "info">
                <p>Descripción: {desc}</p>
                <p>Persona asignada: {assignee}</p>
                <p>Fecha inicio: {start}</p>
                <p>Fecha fin: {end}</p>
            </div>
        </div>
    );
};

export default Card;