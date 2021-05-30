import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AbouTile';
import { stripTags, domHtml } from '../../../utils/stripTags';
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';

import SEO from '../../Seo';

const pageText = 
{
  ko : {
    paraOne: `라인플러스에서 <b>DW/BI 데이터 엔지니어</b>로 일하고 있는 조지훈입니다. <br/>
    하둡 기반의 DW 및 ETL 파이프라인 구축과 운영을 하고 있습니다.<br/>
    상시 업무로 Python, Java, SQL 등을 주로 사용합니다.<br/>
    <br/>
    데이터 엔지니어가 되기 전에는 웹개발, 게임서버개발도 경험하였습니다.<br/>
    소프트웨어 엔지니어로서 사람들에게 더 큰 가치를 줄 수 있는 저만의 길을 계속 찾아가려고 합니다.<br/>
      `,
    paraTwo: `방대한 집계를 다루는 DW영역은 데이터 엔지니어 업무 중에서도 많이 힘든 부분입니다.<br/>
    이러한 부분들을 간략화하여 더 많은 사람들이 쉽게 DW 운영을 할 수 있는 방법론을 찾으려 합니다
    `,
  },
  ja: {
    paraOne: `韓国のLine＋でゲームプラットフォームのDW/BIデータエンジニアをやってる「ジョ・ジフン」と申します。<br/>
    データエンジニアになる前はSI、ゲームサーバー開発もやってました。
      `,
    paraTwo: `膨大な集計をたくさん管理するBI/DWの領域は、エンジニアとしては辛い業務が多いです。<br/>
    この仕事がもっと簡単なものになれるように、いろんな研究をしていきたいと思ってます。<br/>
    あと、日本語がもっと上手くなれるよう頑張ってます。
    `,
  }
}
;

const AboutMe = () => {
  
  let pathname = "";
  if(typeof window !== `undefined`) {
    pathname = location.pathname;
  }
  const defaultLangKey = "ko";
  const langKey = getCurrentLangKey(["ko","ja","en","cn"], defaultLangKey, pathname);

  const description = `${pageText[langKey].paraOne} ${stripTags(pageText[langKey].paraTwo)}`;
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
        <p dangerouslySetInnerHTML={domHtml(pageText[langKey].paraOne)}/>
        <p dangerouslySetInnerHTML={domHtml(pageText[langKey].paraTwo)} />
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
            textH4="규모가 큰 개발은 Java 경험이 가장 많습니다. 최근 프로젝트에선 Springboot 를 사용했습니다"
            textH3="Java"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="dev-go.jpg"
            alt="go image"
            textH4="경험이 많지는 않으나 일부 성능이 중요한 부분에 도입하여 사용중입니다."
            textH3="Golang"
          />
        </Col>
        {/* <Col xs={24} sm={24} md={12} lg={8}>
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
        </Col> */}
      </Row>           
    </>
  );
};
export default AboutMe;
