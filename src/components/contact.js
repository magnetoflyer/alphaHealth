import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
export default function contact() {
    return (
        <div className='block contactBlock'>
            <div className='container-fluid'>
                <div classname='titleHolder'>
                    <h2>Get in Touch</h2>
                    <p>we would love to hear from you</p>
                </div>

                <Form
                    name="normal_login"
                    className="login-form"
                       initialValues={{ remember: true }}

                    >
                        <Form.Item
                        name="name"
                        rules={[{ required: true, message: 'Please input your name!' }]}
                    >
                        <Input  placeholder="Name" />
                    </Form.Item>
                    <Form.Item
                        name="Email"
                        rules={[{ required: true, message: 'Please input your Email!' }]}
                    >
                        <Input  placeholder="Email" />
                    </Form.Item>
                    <Form.Item
                        name="Query"
                        rules={[{ required: true, message: 'Please input your your query!' }]}
                    >
                        <Input
                       
                        type="text"
                        placeholder="Message"
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                        Submit
                        </Button>
                      
                    </Form.Item>
                    
                </Form>
            </div>
            
        </div>
    )
}
