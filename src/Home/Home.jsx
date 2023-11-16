import './Home.css'
import { Menu } from '../Menu/Menu'
import { Music } from '../Music/Music'
export function Home () {
    return(
        <>
        <header>
            <Menu></Menu>
        </header>
        <main>
            <div className='banner text-wihte'>
                <h3 className='fuente'>Caifanes</h3>
                <h5 className='fuente'>abcdefghijklmnopqrstuvwxyz</h5>
            </div>
        </main>
        <section>
            <Music></Music>
        </section>
        </>
    )
}