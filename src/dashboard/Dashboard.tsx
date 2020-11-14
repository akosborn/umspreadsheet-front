import React from 'react';
import {Col, Row} from 'antd';
import TopSongs from './highlights/TopSongs';
import TopShows from './highlights/TopShows';
import Discover from './highlights/Discover';

function Dashboard() {

   return (
      <div>
         <Row gutter={30}>
            <Col xs={24} lg={14}>
               <TopSongs />
               <TopShows />
            </Col>
            <Col xs={24} lg={10}>
               <Discover />
            </Col>
         </Row>
      </div>
   );
}

export default Dashboard;
