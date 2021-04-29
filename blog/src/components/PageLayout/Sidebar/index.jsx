import React from 'react';
import {
  Affix, Layout, Row, Col,
} from 'antd';
import FA from 'react-fontawesome';
import FeatherIcon from 'feather-icons-react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { globalHistory } from '@reach/router';
import style from './sidebar.module.less';
import { useWindowSize } from '../../../utils/hooks';
import Config from '../../../../config';
import { Select } from 'antd';
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';

const { Option } = Select;

const { Content } = Layout;
const {
  facebook, github, instagram, linkedin, stackoverflow, medium
} = Config.social;

const DomContent = () =>{
  const defaultLangKey = "ko";
  const langKey = getCurrentLangKey(["ko","ja","en","cn"], defaultLangKey, location.pathname);
  const homeLink = `/${langKey}/`.replace(`/${defaultLangKey}/`, '/');
  
  return (
  <aside>
    <div className={style.profileAvatar} onClick={() => { location.href="#"; }}/>
    <div className={`${style.name} centerAlign`}>
      <div className={`${style.boxName} centerAlign`}>
        <h2>
          <span onClick={() => { location.href="/"; }}>조지훈</span>
        </h2>
      </div>
      <div className={`${style.badge} ${style.badgeGray}`}>Software Engineer</div>
      <div className="centerAlign box">
        <a href={github} target="_blank" label="button" rel="noopener noreferrer"><FA name="github" /></a>
        <a href={facebook} target="_blank" label="button" rel="noopener noreferrer"><FA name="facebook-f" /></a>
        {/* <a href={twitter} target="_blank" label="button" rel="noopener noreferrer"><FA name="twitter" /></a> */}
        <a href={instagram} target="_blank" label="button" rel="noopener noreferrer"><FA name="instagram" /></a>
        <a href={linkedin} target="_blank" label="button" rel="noopener noreferrer"><FA name="linkedin" /></a>
        <a href={stackoverflow} target="_blank" label="button" rel="noopener noreferrer"><FA name="stack-overflow" /></a>
        <a href={medium} target="_blank" label="button" rel="noopener noreferrer"><FA name="medium" /></a>
      </div>
      <ul className={`box ${style.badge} contactBlock`}>
      <li className={`${style.contactBlockItem}`}>
          <span><FeatherIcon size="19" icon="briefcase" /></span>
          {' '}
&nbsp; &nbsp; @게임빌컴투스플랫폼
        </li>
        <li className={`${style.contactBlockItem}`}>
          <span>
            <FeatherIcon size="19" icon="calendar" />
            {' '}
          </span>
&nbsp; &nbsp; 1983년생
        </li>
        <li className={`${style.contactBlockItem}`}>
          <span><FeatherIcon size="19" icon="map-pin" /></span>
          {' '}
&nbsp; &nbsp; 서울 마포구 공덕동
        </li>
        <li className={`${style.contactBlockItem}`}>
          <span><FeatherIcon size="19" icon="mail" /></span>
          {' '}
&nbsp; &nbsp;
          <a href="mailto:jo8937&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;"
            target="_top"
          >
            <span className={style.emailHider}>@</span>
          </a>
        </li>
      </ul>
      <div className={style.resumeDownload}>
      <Select defaultValue={langKey} style={{ width: 120 }} onChange={(value) => { location.href = `/${value}`.replace(`/${defaultLangKey}`, '/'); }}>
          <Option value="ko">한국어</Option>
          <Option value="ja">
            日本語
          </Option>
          <Option value="en" disabled>
            English
          </Option>
        </Select>
        {/* <a href="../resume.pdf" download target="_blank">Download CV</a> */}
      </div>
    </div>
  </aside>
)};

const Sidebar = (props) => {
  const [width] = useWindowSize();
  const { children } = props;
  const { pathname } = globalHistory.location;
  let domContent = <DomContent />;
  if (width > 997) {
    domContent = (
      <Affix offsetTop={0}>
        <DomContent />
      </Affix>
    );
  }
  if (width < 768) {
    domContent = <></>;
    if (pathname === '/') {
      domContent = <DomContent />;
    }
  }
  return (
    <>
      <Layout>
        <Content className={`${style.content} ${style.background}`}>
          <Row>
            <Col sm={24} md={9} lg={6} className={style.sidebarContent}>
              { domContent }
            </Col>
            <Col sm={24} md={15} lg={18}>
              <Layout className={`${style.background} ${style.boxContent} borderRadiusSection`}>
                { children }
              </Layout>
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  );
};

export const Sidebar404 = (props) => {
  const { children } = props;
  return (
    <Layout>
      <Content className={`${style.content} ${style.background} `}>
        <Row>
          <Col sm={24} md={24} lg={24}>
            <Layout className={`${style.background} ${style.boxContent} ${style.sideBar404Radius}`}>
              {children}
            </Layout>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Sidebar;
