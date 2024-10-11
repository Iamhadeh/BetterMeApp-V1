


function EachResourceDetail (props) {

    return (
        <>
        <a href={props.link}>
        <div className="eachTopic" >
            <a href={props.link}> {props.title} </a>
            <p><span className="boldText"> {props.type} </span> by <span className="boldText"> {props.authorName}</span></p>
        </div>
        </a>
        </>
    )
}

export default EachResourceDetail;