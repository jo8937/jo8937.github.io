import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AbouTile';
import { stripTags, domHtml } from '../../../utils/stripTags';

import SEO from '../../Seo';

const pageText = {
  paraOne: `게임회사에서 <b>데이터 엔지니어</b>로 일하고 있는 조지훈입니다. <br/>
  <b>구글 클라우드 플랫폼</b> 기반의 <b>DW</b> 및 <b>ETL 파이프라인</b> 구축과 운영을 하고 있습니다.<br/>
  상시 업무로 <b>Python, SQL, ShellScript</b>을 주로 사용하며, 서버 개발은 <b>Java, Go</b>언어를 주로 사용합니다.<br/>
  <br/>
  데이터 엔지니어가 되기 전에는 웹개발, 게임서버개발도 경험하였습니다.<br/>
  분야를 한정짓지 않고, 소프트웨어 엔지니어로서 타인에게 더 큰 가치를 줄 수 있는 길을 계속 찾아 해나가려 합니다.<br/>
    `,
  paraTwo: `현재 관심 기술은 프론트엔드 영역에선 Javascript(React), Unity, 백엔드 영역에선 Kubernetes, MLOps 입니다.<br/>
  본 웹사이트도 react 기반 gatsby 를 통해 직접 제작하였습니다.  
  `,
};


const AboutMe = () => {
  const description = `${pageText.paraOne} ${stripTags(pageText.paraTwo)}`;
  return (
      <>
      <div>
        <SEO
          title="About"
          description={description}
          path=""
          keywords={['Rolwin', 'Reevan', 'Monteiro', 'FullStack developer', 'Javascript', 'ReactJS', 'NodeJS', 'Gatsby']}
        />
        <h1 className="titleSeparate">About Me</h1>
        <p dangerouslySetInnerHTML={domHtml(pageText.paraOne)}/>
        <p dangerouslySetInnerHTML={domHtml(pageText.paraTwo)} />
      </div>
      
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="dev-python.jpg"
            height={60}
            alt="Python image"
            textH4="파이썬 코딩이 가장 익숙합니다.<br/>분석,검증,모니터링을 위해 인스턴스 스크립트를 개발하는 일이 많습니다."
            textH3="Python"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="dev-java.jpg"
            alt="coffee image"
            textH4="규모가 큰 개발은 Java 경험이 가장 많습니다. 최근 프로젝트에선 Springboot + JPA 를 사용했습니다"
            textH3="Java"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="dev-go.jpg"
            alt="go image"
            textH4="경험이 많지는 않으나 활용처가 계속 늘고 있습니다. 일부 성능이 중요한 부분에 도입하여 사용중입니다."
            textH3="Golang"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="dev-fluentd.jpg"
            alt="fluentd image"
            textH4="ETL의 최전방 Fluentd 를 효율적으로 제공하고 운영할 수 있도록 연구중입니다."
            textH3="Fluentd"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="dev-kafka.jpg"
            alt="Kafka"
            textH4="온프레미스 ETL 파이프라인의 핵심인 Kafka 를 장애없이 효율적으로 운영 할 수 있도록 연구중입니다."
            textH3="Kafka"
            height={60}
            width={60}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="dev-bigquery.jpg"
            alt="Bigquery"
            textH4="SQL을 많이 씁니다. 전사직원이 효율적으로 데이터 확인,검증,분석을 할 수 있도록 제공 방안을 연구중입니다."
            textH3="Google Cloud Bigquery"
            height={60}
            width={60}
          />
        </Col>
      </Row>           
    </>
  );
};
export default AboutMe;
