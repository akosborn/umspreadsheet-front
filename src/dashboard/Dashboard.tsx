import React from 'react';
import {Col, Row, Space, Table, Tag} from 'antd';
import styles from './Dashboard.module.css';
import classNames from 'classnames';

function Dashboard() {
  return (
    <div>
      <Row gutter={30}>
        <Col xs={24} lg={18}>
          <div className={classNames(styles.largeBlocks, styles.block)} style={{ marginBottom: 30 }}>
            TOP RATED SONGS
            <Table dataSource={data} columns={columns} size={'small'} />
          </div>
          <div className={classNames(styles.largeBlocks, styles.block)}>
            TOP RATED SHOWS
          </div>
        </Col>
        <Col xs={24} lg={6}>
          <div className={styles.block}>
            DISCOVER
          </div>
        </Col>
      </Row>
    </div>
  );
}

const columns = [
  {
    title: 'Song',
    dataIndex: 'name',
    key: 'name',
    render: (text: React.ReactNode) => <a>{text}</a>,
  },
  {
    title: 'Date',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Venue',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags: string[]) => (
      <>
        {tags.map((tag: string) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text: any, record: { name: React.ReactNode; }) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

export default Dashboard;
