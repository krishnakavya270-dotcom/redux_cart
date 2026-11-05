import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Products() {
    return (
        <div className='ms-5 my-5'>
            <div className='row pt-5'>
                <div className='col-3'>
                    {/* cards */}
                    <Card >
                        <Card.Img style={{height:'250px'}} variant="top" src="https://stylecaster.com/wp-content/uploads/2015/04/x1532.jpg" />
                        <Card.Body className='text-center'>
                            <Card.Title>Foundation</Card.Title>
                            <Link to={`/Products/:id`} className='btn btn-primary'>View More</Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Products
