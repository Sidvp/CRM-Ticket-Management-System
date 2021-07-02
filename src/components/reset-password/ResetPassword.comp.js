import React from 'react';
import PropTypes from 'prop-types';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export const ResetPassword = ({ handleOnChange, handleOnResetSubmit, formSwitcher, email }) => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1>Reset Password</h1>
                    <hr />
                    {/* <Form autoComplete="off"> */}   {/* Autocomplete is off for fields. */}
                    <Form OnSubmit={handleOnResetSubmit}>
                        <Form.Group>
                            <Form.Label>Email ID:</Form.Label>
                            <Form.Control 
                                type="email"
                                name="email"
                                value = {email}
                                onChange = {handleOnChange}
                                placeholder="Enter Email ID"
                                required
                            />
                        </Form.Group>
                        
                        <Button type="submit">Submit</Button>
                    </Form>
                    <hr />
                </Col>
            </Row>

            <Row>
                <Col>
                  <a href="#!" onClick={()=>formSwitcher('login')}>Reset</a>
                </Col>
            </Row>
        </Container>
    )
}


ResetPassword.propTypes = {    // Ensure correct prop types are received.
    handleOnChange: PropTypes.func.isRequired, 
    handleOnResetSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
};