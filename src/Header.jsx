import logoPicture from './assets/Logo.jpg'

function Header(){

    return(

    <>
 
    <div className ="Logo">
        <h2 className='Home'><a href="">Home</a></h2>

        <h2 className='All-services'><a href="">All Services</a></h2>

        <img className="kitchen-logo" src={logoPicture} alt="logo"></img>

        <h2><a href="">About</a></h2>

        <h2> <a href="">Contact</a></h2>
    </div>

    <div className='overview'>
        A treasured collection of amma's recipes over 25 years
        <div className="line-container">
        <hr />
        </div>
    </div>

    




    </>
);

    

    

}

export default Header;
