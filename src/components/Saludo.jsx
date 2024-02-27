function Saludo(){
    const user = "John Doe"
    return (
        <>
            <h2 className="title">¡Hello {user}!</h2>
            <h2>{8+51}</h2>
            {350 > 200 ? <h4>Oh right</h4> : <h3>Yeeah Buddy</h3> }
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias velit repudiandae, excepturi quis autem dolor soluta molestiae, rerum illum odit adipisci quo impedit harum quia vitae, dicta ea molestias ipsam.</p>
        </>
    )
}

export default Saludo;