import React from 'react';
import { Card } from 'react-bootstrap';
import './Articles.css'

const Articles = () => {
    return (
        <div className='container mb-5'>

            <h2 className='article-title'> Our Recent Articles </h2>

            <div className='article-main'>
                <div>
                    <Card>
                        <Card.Img variant="top" src="https://i.ibb.co/dPg9FK7/chocolate.webp" />
                        <Card.Body>
                            <Card.Title> Top 10 Chocolate Brands In The World </Card.Title>
                            <Card.Text>
                                Chocolate is liked by most of the people in the world. The love for chocolates doesn’t consider age, gender, geographical location or social status. In fact, it is one of the few edibles that are loved across the globe; no matter what country..
                            </Card.Text>
                        </Card.Body>

                        <Card.Body>
                            <Card.Link href="#"> <button className='btn btn-secondary'>Read More..</button></Card.Link>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card >
                        <Card.Img variant="top" src="https://i.ibb.co/nwFnbv3/starbucks.jpg" />
                        <Card.Body>
                            <Card.Title>Starbucks Is Launching Its Own NFT Collection</Card.Title>
                            <Card.Text>
                                During an open forum in early April, Starbucks CEO Howard Schultz spoke about several aspects of the company's future, including how the chain can improve its employees' overall..
                            </Card.Text>
                        </Card.Body>

                        <Card.Body>
                            <Card.Link href="#"> <button className='btn btn-secondary'>Read More..</button></Card.Link>
                        </Card.Body>
                    </Card>
                </div>
                <div>
                    <Card >
                        <Card.Img variant="top" src="https://i.ibb.co/VBFKbvh/wings.jpg" />
                        <Card.Body>
                            <Card.Title>17 of Our Best Sauces for Chicken Wings</Card.Title>
                            <Card.Text>
                                Chicken wings are the ultimate messy finger food, whether you love them with classic buttery Buffalo flavors, a sticky fruit glaze, or a sweet-and-sour sauce that will make your mouth tingle and so on...
                            </Card.Text>
                        </Card.Body>

                        <Card.Body>
                            <Card.Link href="#"> <button className='btn btn-secondary'>Read More..</button></Card.Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>


        </div>
    );
};

export default Articles;