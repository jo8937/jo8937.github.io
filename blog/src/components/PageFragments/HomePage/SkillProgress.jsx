import React from 'react';
import { Row, Col } from 'antd';
import ProgressBar from '../../Progress';

const SkillsProgress = () => (
  <div>
    <h2 className="titleSeparate2">기술 숙련도</h2>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={6}>

        <ProgressBar
          percent={99}
          text="Python"
        />
        <ProgressBar
          percent={95}
          text="Java"
        />
        <ProgressBar
          percent={90}
          text="Javascript"
        />
        <ProgressBar
          percent={85}
          text="Go"
        />
        <ProgressBar
          percent={80}
          text="C#"
        />
      </Col>

      <Col xs={24} sm={24} md={6}>
        <ProgressBar
          percent={95}
          text="Apache Beam"
        />
        <ProgressBar
          percent={90}
          text="Springboot + JPA"
        />
        <ProgressBar
          percent={85}
          text="React + Redux"
        />
      </Col>

      <Col xs={24} sm={24} md={6}>
        <ProgressBar
          percent={99}
          text="Bigquery"
        />
        <ProgressBar
          percent={90}
          text="Mysql"
        />
        <ProgressBar
          percent={80}
          text="Redis"
        />
      </Col>

      <Col xs={24} sm={24} md={6}>
        <ProgressBar
          percent={95}
          text="Fluentd"
        />
        <ProgressBar
          percent={95}
          text="Embulk"
        />
        <ProgressBar
          percent={95}
          text="Digdag"
        />
        <ProgressBar
          percent={90}
          text="Scribed"
        />
        <ProgressBar
          percent={80}
          text="Kafka"
        />
        <ProgressBar
          percent={70}
          text="Airflow"
        />
      </Col>      
    </Row>
  </div>
);

export default SkillsProgress;
