


function Article(prop) {
    const firstLetter = prop.p.charAt(0);
    const restOfPar = prop.p.slice(1);

    return(
        <>
            <h2>{prop.date}</h2>
            <h1>{prop.title}</h1>
            <img src={prop.img} alt={prop.imgText} />
            <p>
                <span className="drop-letter">{firstLetter}</span>{restOfPar}
            </p>
            <a href="#">{prop.continue}</a>

        </>
    )
}

export default Article