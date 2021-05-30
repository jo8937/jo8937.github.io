import React from 'react';
import { List, Avatar } from 'antd';
import { Row, Col } from 'antd';

const companyHistory = [
  {
    title: '라인플러스',
    img:'../lineplus.jpg',
    desc:'2016.05.24 ~ 현재',
    content:'데이터 엔지니어',
  },
  {
    title: '게임빌컴투스플랫폼',
    img:'../gcp.jpg',
    desc:'2016.01.25 ~ 2021.05.18 (5년)',
    content:'데이터 엔지니어',
  },
  {
    title: 'NHN 스타피쉬',
    img:'../nhn.jpg',
    desc:'2012.08.16 ~ 2016.01.05 (3년)',
    content:'게임 서버 프로그래머',
  },
  {
    title: '컴투스',
    img:'../com2us.jpg',
    desc:'2009.07.06 ~ 2011.08.17 (2년)',
    content:'서버 프로그래머',
  },
  {
    title: '블루넷',
    img:'../bluenet.jpg',
    desc:'2004.01.09 ~ 2006.11.08 (3년)',
    content:'웹 프로그래머 (병특)',
  },
];

const scholarHistory = [
  {
    title: '한양대학교',
    img:'../hanyang.jpg',
    desc:'2001.03 ~ 2009.02',
    content:'응용수학 및 컴퓨터공학 복수전공',
  },
  {
    title: '양정고등학교',
    img:'../yangjung.jpg',
    desc:'1998.01 ~ 2001.02',
    content:'이과',
  },
]

const History = () => {
  return (
      <>
      <Row gutter={[20,20]} justify="space-between">
      <Col xs={24} sm={24} md={12} lg={12}>
        <h2 className="titleSeparate2">경력</h2>
        <List
          itemLayout="horizontal"
          dataSource={companyHistory}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={item.img} size={64}/>}
                title={item.title}
                description={item.desc}
              />
              <div>{item.content}</div>
            </List.Item>
          )}
        />
      </Col>
      <Col xs={24} sm={24} md={12} lg={12}>
        <h2 className="titleSeparate2">학력</h2>
        <List
          itemLayout="horizontal"
          dataSource={scholarHistory}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={item.img} size={64}/>}
                title={item.title}
                description={item.desc}
              />
              <div>{item.content}</div>
            </List.Item>
          )}
        />
      </Col>    
      </Row>  
    </>
  );
};
export default History;
