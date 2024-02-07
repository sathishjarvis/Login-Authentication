import React, { useState } from 'react';
import '../App.css';
import { Layout, Menu, Card, Col, Row, Tabs, TreeSelect } from 'antd';
import { HomeOutlined, UserOutlined, ShoppingCartOutlined, ArrowUpOutlined, ArrowDownOutlined, SettingOutlined, ToolOutlined, WindowsOutlined, DatabaseOutlined } from '@ant-design/icons';
import { Cascader, Form, DatePicker, Space } from 'antd';
import { Image, Button, Avatar, Progress } from 'antd';

const { Content, Sider } = Layout;
const { RangePicker } = DatePicker;
const { SHOW_PARENT } = TreeSelect;
const onChange = (key) => {
    console.log(key);
};
function SignButton() {
    const [value, setValue] = useState(['new', 'Estimated']);
    const onChanged = (newValue) => {
        console.log('onChange ', value);
        setValue(newValue);
    };
    const residence = [
        {
            value: 'Tamil Nadu',
            label: 'Tamil nadu',
            children: [
                {
                    value: 'pondy',
                    label: 'pondy',
                    children: [
                        {
                            value: 'Mudaliarpet',
                            label: 'Mudaliarpet',
                        },
                    ],
                },
            ],
        },
        {
            value: 'Tamil nadu',
            label: 'Tamil nadu',
            children: [
                {
                    value: 'Villupram',
                    label: 'Villupram',
                    children: [
                        {
                            value: 'Kottakuppam',
                            label: 'Kottakuppam',
                        },
                    ],
                },
            ],
        },
    ];
    const treeData = [
        {
            title: 'Node1',
            value: '0-0',
            children: [
                {
                    title: 'Child Node1',
                    value: '0-0-1',
                },
                {
                    title: 'Child Node2',
                    value: '0-0-2',
                },
            ],
        },
        {
            title: 'Node2',
            value: '0-1',
        },
    ];
    const treeDatas = [
        {
            title: 'Node1',
            value: '0-0',
            key: '0-0',
            children: [
                {
                    title: 'Child Node1',
                    value: '0-0-0',
                    key: '0-0-0',
                },
            ],
        },
        {
            title: 'Node2',
            value: '0-1',
            key: '0-1',
            children: [
                {
                    title: 'Child Node3',
                    value: '0-1-0',
                    key: '0-1-0',
                },
                {
                    title: 'Child Node4',
                    value: '0-1-1',
                    key: '0-1-1',
                },
                {
                    title: 'Child Node5',
                    value: '0-1-2',
                    key: '0-1-2',
                },
            ],
        },
    ];
    const tProps = {
        treeData,
        value,
        onChanged,
        treeCheckable: true,
        showCheckedStrategy: SHOW_PARENT,
        placeholder: 'Please select',
        style: {
            width: '15%',
            marginLeft: "15px",
        },
    };
    const items = [
        {
            key: '1',
            label: `Approval List(153)`,
            children: <div>
                <TreeSelect
                    style={{
                        width: '15%',
                    }}
                    dropdownStyle={{
                        maxHeight: 400,
                        overflow: 'auto',
                    }}
                    treeData={treeDatas}
                    placeholder="All categories"
                /><TreeSelect {...tProps} />j
                <Button type="primary" style={{ marginLeft: "15px" }}>Filter</Button>
            </div>,
        },
        {
            key: '2',
            label: `New Work Orders(67)`,
            children: ``,
        },
        {
            key: '3',
            label: `Estimates(67)`,
            children: `Content of Tab Pane 3`,
        },
    ]
    return (
        <div className='Dashboard'>
            <Layout>
                <div className='side-bar'>
                    <Sider className='siders'>
                        <Menu defaultSelectedKeys={['1']} mode="inline" className='siders' >
                            <Menu.Item key="1" icon={<HomeOutlined />}>
                            </Menu.Item>
                            <Menu.Item key="2" icon={<UserOutlined />}>
                            </Menu.Item>
                            <Menu.Item key="3" icon={<ShoppingCartOutlined />}>
                            </Menu.Item>
                            <Menu.Item key="4" icon={<SettingOutlined />}>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                </div>
                <Layout className="site-layout">
                    <div className='header'>
                        <Menu theme="light" defaultSelectedKeys={['1']} mode="inline" style={{ alignItems: 'center', display: 'flex', float: 'right' }}>
                            <Menu.Item key="1" icon={<HomeOutlined />}>
                            </Menu.Item>
                            <Menu.Item key="2" icon={<UserOutlined />}>
                            </Menu.Item>
                            <Menu.Item key="3" icon={<ShoppingCartOutlined />}>
                            </Menu.Item>
                            <Menu.Item key="4" icon={<Avatar
                                style={{
                                    backgroundColor: "rgb(50, 142, 218)",
                                    verticalAlign: 'middle',
                                }}
                                size="large"
                            >
                            </Avatar>}>
                            </Menu.Item>
                        </Menu>
                    </div>
                    <div>
                        <Content style={{ margin: '50px 16px' }}>
                            <div className="site-layout-background name" style={{ padding: 4, minHeight: 20 }}>
                                <div>
                                    <h2>
                                        Hi Team, I'm Sathish.A<br></br>
                                        Web developer
                                    </h2>
                                </div>
                                <div style={{ margin: '0 300px' }}>
                                    <Space direction="horizontal" size={12}>
                                        <Form.Item
                                            name="residence"
                                            rules={[
                                                {
                                                    type: 'array',
                                                    required: true,
                                                    message: 'Please select your habitual residence!',
                                                },
                                            ]}
                                        >
                                            <Cascader options={residence} placeholder="location" />
                                        </Form.Item>
                                        <Form.Item style={{ width: "220px" }} rules={[
                                            {
                                                required: true,
                                                message: 'please enter the date of birth'
                                            },
                                        ]} hasFeedback>
                                            <RangePicker />
                                        </Form.Item>
                                    </Space>
                                </div>
                            </div>
                            <hr></hr>
                            <div className='bg-white'>
                                <Row>
                                    <Col span={14}>
                                        <div style={{ marginBottom: "10px" }} className='works'>
                                            <div style={{ marginBottom: "10px" }}><h2>works overview</h2></div>
                                            <div>
                                                <div>
                                                    <Row gutter={10}>
                                                        <Col span={7}>
                                                            <Card>
                                                                <div className='flex-verticle'>
                                                                    <div className='icons'>
                                                                        <ToolOutlined className='icon' />
                                                                    </div>
                                                                    <div className='letters'>
                                                                        <h5>Total work orders</h5>
                                                                        <p>258</p>
                                                                        <span><ArrowUpOutlined />2.7% higher</span>
                                                                    </div>
                                                                </div>
                                                            </Card>
                                                        </Col>
                                                        <Col span={7}>
                                                            <Card>
                                                                <div className='flex-verticle'>
                                                                    <div className='icons'>
                                                                        <WindowsOutlined className='icon' />
                                                                    </div>
                                                                    <div className='letters'>
                                                                        <h5>Estimated works</h5>
                                                                        <p>142</p>
                                                                        <span><ArrowDownOutlined />27% completed</span>
                                                                    </div>
                                                                </div>
                                                            </Card>
                                                        </Col>
                                                        <Col span={7}>
                                                            <Card>
                                                                <div className='flex-verticle'>
                                                                    <div className='icons'>
                                                                        <DatabaseOutlined className='icon' />
                                                                    </div>
                                                                    <div className='letters'>
                                                                        <h5>Approved works</h5>
                                                                        <p>116</p>
                                                                        <span><ArrowUpOutlined />35% Approved</span>
                                                                    </div>
                                                                </div>
                                                            </Card>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col span={10}>
                                        <div style={{ marginBottom: "10px" }}><h2>works category</h2></div>
                                        <div className='image'>
                                            <Image width={400} height={200} src='https://res.cloudinary.com/monday-blogs/w_768,h_384,c_fit/fl_lossy,f_auto,q_auto/wp-blog/2020/12/workflow-diagram-2-1.jpg' ></Image>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Content>
                        <div className='mytask'>
                            <div>
                                <h2>My Task</h2>
                            </div>
                            <div className='bg-white'>
                                <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
                            </div>

                        </div>
                    </div>
                    <div className='progress'>
                        <div className='progress-bar'>
                            <Progress type="circle" percent={100} size={[180, 20]} strokeWidth={20} strokeColor={{
                                '0%': "#108ee9",
                                '50%': "#87d068",
                                '100%': "#f50"
                            }} />
                        </div>
                        <div className='work-cate-status'>
                            <div><Button type='primary' />  Estimated</div>
                            <div><Button type='primary' danger />  Aproved</div>
                            <div><Button type='primary' progress />  Pending</div>
                        </div>
                        <hr></hr>
                        <div className='bg'>
                            <Col span={8}>
                                <div className='workimage-progress'>
                                    <div className='progress-bars'>
                                        <Progress type="circle" percent={100} size={[180, 20]} strokeWidth={20} strokeColor={{
                                            '0%': "#108ee9",
                                            '50%': "#87d068",
                                            '100%': "#f50"
                                        }} />
                                    </div>
                                    <div className='work-cate-status'>
                                        <Space direction='vertical' size={20}>
                                            <div><Button type='primary' />  Estimated</div>
                                            <div><Button type='primary' danger />  Aproved</div>
                                            <div><Button type='primary' progress />  Pending</div>
                                        </Space>
                                    </div>
                                </div>
                            </Col>
                        </div>
                    </div>
                </Layout>
            </Layout>
        </div>
    );
}

export default SignButton;