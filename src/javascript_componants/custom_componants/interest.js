// Uses bootstrap componants to create automatically create columns within the row tags. All
// the elements are plaved within a form tag to ensure that everything is displayed in relation
// to each other.
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

// This function takes in the numbers from the interestCalculator object from the app section and then displays them in this section.
function Interest(props) {

    return (
        <div className="text-white text-center mt-5">   
            <h1>Interest Calculator</h1>
            
            {/* Using bootstrap the elements are centered relative to one another. */}
            <div className="d-flex justify-content-center align-items-center mt-5">

                {/* The form is used to structure the position of the elements */}
                <Form id='table'>

                    {/* Provides an explanation for this section. */}
                    <p className='mb-5'>Please provide the total you would like to purchase and how many months you would like to pay them off.</p>
                    
                    {/* Everytime the field is altered with a number the input is stored/calculated and displayed below. */}
                    <Row>
                        <Col>
                            {/* Asks the user to provide the total amount they wish to spend. */}
                            <Form.Label>Total Amount</Form.Label>
                            <Form.Control onChange={props.onChange} id='totalCost' placeholder="Amount"/>
                        </Col>
                        <Col>
                            {/* Asks the user how many months to wish to pay for the items. */}
                            <Form.Label>Amount of Months</Form.Label>
                            <Form.Control onChange={props.onChange} id='totalMonths' placeholder="Months"/>
                        </Col>
                    </Row>

                    {/* Provdes the user with the amount they entered, which will stay until the fields are altered. */}
                    <Row className='borderCalculator mt-5'>
                        <Col>
                            Amount:
                        </Col>
                        <Col>
                            £{props.information.amount}
                        </Col>
                    </Row>

                    {/* Lets the user know the interest rate and how much this will cost them. */}
                    <Row className='borderCalculator mt-1'>
                        <Col>
                            Interest At 20%:
                        </Col>
                        <Col>
                            £{(props.information.amountTotal - props.information.amount).toFixed(2)}
                        </Col>
                    </Row>

                    {/* Provides the user with their entered timeframe. */}
                    <Row className='borderCalculator mt-1'>
                        <Col>
                            Number Of Months:
                        </Col>
                        <Col>
                            {props.information.months}
                        </Col>
                    </Row>

                    {/* Provides the user with the monthely costs and the total they will pay. */}
                    <Row className='borderCalculator mt-4'>
                        <Col>
                            <b>You will pay £{(props.information.perMonth).toFixed(2)} for the next {props.information.months} months to a total of £{(props.information.amountTotal).toFixed(2)}.</b> 
                        </Col>
                    </Row>
                </Form>
            </div>
        </div> 
);
}

// This is then exported to the app file.
export default Interest;