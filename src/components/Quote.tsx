
const Quote = ({data,color})=>{

    return(
        <>
        <h2 className={color} id="text">{`"${data.content}"`}</h2>
        <p id="author">{`- ${data.author}`}</p>
        </>
    );
}

export default Quote;