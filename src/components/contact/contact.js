import React from 'react'

import { Row, Col, Card, Input, Button } from 'react-materialize'

import UserProfile from '../user_profile/user_profile'

const Contact = () => (
    <Row>
        <Col m={3} s={12}>
            <UserProfile />
        </Col>
        <Col m={8} s={12}>
            <h5>Contact</h5>
            <Card>
                <Row>
                    <Input placeholder="lorem@ipsum.com" type="Email" label="E-mail" s={12} />
                    <Input placeholder="Lorem Ipsum..." label="Message" s={12} />
                    <Col m={12} s={12}>
                        <Button waves='light' className="right grey darken-2">SEND</Button>
                    </Col>
                </Row>
            </Card>
        </Col>
    </Row>

)

export default Contact;