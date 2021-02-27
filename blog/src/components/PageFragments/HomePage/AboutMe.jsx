import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AbouTile';
import { stripTags, domHtml } from '../../../utils/stripTags';

import SEO from '../../Seo';

const pageText = {
  paraOne: `게임회사에서 데이터엔지니어로 일하고 있는 조지훈입니다. <br/>
    웹개발, 게임서버개발을 거쳐서 현재는 데이터 엔지니어를 하고 있습니다. <br/>
    약 10년의 서버개발경력을 통해 <br/>
    현재는 ETL 파이프라인 운영을 하며 GO언어 활용을 <br/>
    약 8년간 Java, C# 을 통한 대규모 서버 어플리케이션 구축을 하였고,<br/>
    5년간은 <br/>
    `,
  paraTwo: `Currently I work mostly with Javascript technologies like ReactJS and NodeJS. I also
    have hands on experience working with cloud infrastructures like <b>GCP</b> and have deployed applications
    keeping scalability in mind. Docker, Kubernetes, Jenkins, SonarQube are some of the cool
    tools I use for <b>CI/ CD</b>. I'm always a learner and a self taught programmer.`,
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
            textH4="파이썬에 "
            textH3="Python"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="dev-java.jpg"
            alt="coffee image"
            textH4="Love Coffee"
            textH3="Java"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="dev-go.jpg"
            alt="go image"
            textH4="GO 언어"
            textH3="Golang"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="dev-fluentd.jpg"
            alt="fluentd image"
            textH4="Fluentd 로 ETL 파이프라인"
            textH3="Fluentd"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="dev-kafka.jpg"
            alt="Kafka"
            textH4="Kafka "
            textH3="Kafka"
            height={60}
            width={60}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="dev-bigquery.jpg"
            alt="Bigquery"
            textH4="모던"
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
