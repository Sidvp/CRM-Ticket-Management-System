import React from 'react';
import PropTypes from 'prop-types';

import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export const LoginForm = ({ handleOnChange, handleOnSubmit, formSwitcher, email, password }) => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1>Client Login</h1>
                    <hr />
                    {/* <Form autoComplete="off"> */}   {/* Autocomplete is off for fields. */}
                    <Form OnSubmit={handleOnSubmit}>
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

                        <Form.Group>
                            <Form.Label>Password:</Form.Label>
                            <Form.Control 
                                type="password"
                                name="password"
                                value = {password}
                                onChange = {handleOnChange}
                                placeholder="Enter Password"
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
                  <a href="#!" onClick={() => formSwitcher('reset')}>Forgot Password ??</a>
                </Col>
            </Row>
        </Container>
    )
}


LoginForm.propTypes = {    // Ensure correct prop types are received.
    handleOnChange: PropTypes.func.isRequired, 
    handleOnSubmit: PropTypes.func.isRequired,
    formSwitcher: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired, 
    password: PropTypes.string.isRequired,
};