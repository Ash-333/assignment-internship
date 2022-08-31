import {Container,Col,Row} from 'react-bootstrap';
import Cards from './Cards';
import Slider from './Slider';
import { MDBRow } from 'mdb-react-ui-kit';
import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/3.png';
import img5 from '../assets/5.png';
import img6 from '../assets/earring1.jpeg';
import Footer from './Footer';
import ImageCard from './ImageCard';

const Home=()=>{

    const products=[
        {
            title:"Test",
            price:"RS 200",
            imageUrl:img1
        },
        {
            title:"Test",
            price:"RS 200",
            imageUrl:img2
        },
        {
            title:"Test",
            price:"RS 200",
            imageUrl:img3
        },
        {
            title:"Test",
            price:"RS 200",
            imageUrl:img4
        },
        {
            title:"Test",
            price:"RS 200",
            imageUrl:img5
        },
        {
            title:"Test",
            price:"RS 200",
            imageUrl:img6
        },
    ]

    return(
        <>
            <Slider/>
            
            <section className="featured-products" id="project">
            <Container style={{margin:'0 auto'}}>
                
                <Col>
                    <h2 className='"headertekst' style={{'textAlign': 'center',margin:'30px'}}>Featured Products</h2>
                        <Row>
                            {
                                products.map((product,index)=>{
                                    return(
                                        <Cards
                                            key={index}
                                            {...product}
                                        />
                                    )
                                })
                            }
                        </Row>
                </Col>
                
            </Container>
            <h5 className='more-text'>more >>></h5>
        </section>

        <section className="new-arrivals" id="project">
            <Container style={{margin:'0 auto'}}>
                
                <Col>
                    <h2 className='"headertekst' style={{'textAlign': 'center',margin:'30px'}}>New Arrivals</h2>
                        <Row>
                            {
                                products.map((product,index)=>{
                                    return(
                                        <Cards
                                            key={index}
                                            {...product}
                                        />
                                    )
                                })
                            }
                        </Row>
                </Col>
                
            </Container>
            <h5 className='more-text'>more >>></h5>
        </section>

        <section className="new-arrivals" id="project">
        <MDBRow>
            {
            products.map((product,index)=>{
                return(
                    <ImageCard
                        key={index}
                        {...product}
                    />
                )
            })
            }

    </MDBRow>
        </section>

        <Footer/>
        </>
    )
}

export default Home