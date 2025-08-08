import { chocoDrinks, chocoLatte } from "../Constants"

function Lattes() {
    return (

        <section className='noisy' id='coco'>
            <div className='list'>
                <div className="popular">
                    <h2>
                        Most Polular Lattes
                    </h2>
                    <ul>
                        {
                            chocoLatte.map(latte => (
                                <li key={latte.name}>
                                    <div className="md:me-28">
                                        <h3>{latte.name}</h3>
                                        <p>{latte.country} - {latte.detail} </p>
                                    </div>
                                    <span>- {latte.price}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="loved">
                    <h2>Most Loved Lattes</h2>
                    <ul>
                        {
                            chocoDrinks.map(drinks => (
                                <li key={drinks.name}>
                                    <div className="md:me-28">
                                        <h3>{drinks.name}</h3>
                                        <p>{drinks.country} | {drinks.detail} </p>
                                    </div>
                                    <span>- {drinks.price}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Lattes
