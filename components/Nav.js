import Link from 'next/link';

const Nav = () =>{
    return(
        <nav>
            <div className='logo'>
                <Link href='/'>
                    <h4>Marawi Warriors</h4>
                </Link>
            </div>
            <div>
                <ul className='vanlink'>
                    <li>
                        <Link href='/salbino'><a>Salbino</a></Link>
                    </li>
                    <li>
                        <Link href='/Sandoval'><a>Sandoval</a></Link>
                    </li>
                    <li>
                        <Link href='/bayot'><a>Bayot</a></Link>
                    </li>
                </ul>
                <div className='burger'>
                    <div className='buntop'/>
                    <div className='patty'/>
                    <div className='bunbottom'/>
                </div>
            </div>
            <style jsx>{`
                nav{
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    background: #eee;
                    min-height: 8vh;
                    padding: 15px 10%; 
                }

                li, a{
                    font-size: 16px;
                    text-decoration: none;
                }

                .logo{
                    text-transform: uppercase;
                    letter-spacing: 2.5px;
                    cursor: pointer;
                    margin-right: auto;
                }

                .vanlink{
                    display: flex;
                    justify-content: space-around;
                    background: #eee;
                    width: 30%;
                    list-style: none;
                }

                .vanlink li{
                    display: inline-block;
                    padding: 0 10px;
                }

                .vanlink li a{
                    color: black;
                    transition: all 0.3s ease 0s;
                }
                
                .vanlink li a:hover{
                    color: #0088a9;
                }

                .burger{
                    display: none;
                    cursor: pointer; 
                }

                .burger div{
                    width: 25px;
                    height: 3px;
                    background-color: #0088a9;
                    margin: 5px;
                }

                @media screen and (max-width:760px){
                    .vanlink{
                        position: absolute;
                        right: 0;
                        height: 92vh;
                        top: 8vh;
                        background-color: #eee;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        width: 100%;
                        transform: translateX(100%);
                        transition: transform 0.5s ease-in;
                    }

                    .burger{
                        display: block;
                    }
                }

                .vanlink-active{
                    transform: translateX(0%);
                }

                @keyframes vanLinkFade{
                    from{
                        opacity: 0;
                        transform: translateX(50px);
                    }
                    to{
                        opacity: 1;
                        transform: translateX(0px);
                    }
                }
            `}</style>
        </nav>
    )
}

export default Nav;