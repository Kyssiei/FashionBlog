


function Article(props) {
    const {
        date,
        title,
        img,
        imgText,
        p = "Lorem ipsum dolor sit amet",
        continueText = "continue reading..."
    } = props

    const firstLetter = p.charAt(0) || "L";
    const restOfPar = p.slice(1) || "orem ipsum dolor sit amet";

    return(
        <>
            <h2>{date}</h2>
            <h1>{title}</h1>
            <img src={img} alt={imgText} />
            <p>
                <span className="drop-letter">{firstLetter}</span>{restOfPar}
            </p>
            <a className="continue" href="#">{continueText}</a>

        </>
    )
}

export default Article