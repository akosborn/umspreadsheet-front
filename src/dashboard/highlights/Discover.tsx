import React, {useEffect, useState} from 'react';
import {Table, Tooltip, Typography} from 'antd';
import styles from '../Dashboard.module.css';
import classNames from 'classnames';
import {fetchTracksByDeviation} from '../../TrackAPI';
import {InfoCircleOutlined} from '@ant-design/icons';

function Discover() {

   const [tracks, setTracks] = useState<[]>([]);
   const [tracksAreLoading, setTracksAreLoading] = useState<boolean>(true);

   useEffect(() => {
      let mounted = true;
      fetchTracksByDeviation()
         .then(tracks => {
            if (mounted) {
               setTracksAreLoading(false);
               setTracks(tracks);
            }
         });
      return () => {
         mounted = false;
      };
   }, []);

   return (
      <div className={classNames(styles.block)} style={{marginBottom: 30}}>
         <div style={{ display: 'flex', alignItems: 'baseline' }}>
            <Typography.Title level={5} style={{ marginRight: 7 }}>
               DISCOVER
            </Typography.Title>
            <Tooltip title={'Song performances that are longer than expected (one standard deviation). Sorted by percent deviation.'}>
               <InfoCircleOutlined style={{ fontSize: 14, color: '#1890FF' }} />
            </Tooltip>
         </div>

         <Table loading={tracksAreLoading}
                dataSource={tracks}
                columns={columns}
                size={'small'}
         />
      </div>
   );
}

const columns = [
   {
      title: 'Deviation (%)',
      dataIndex: 'pct_deviation',
   },
   {
      title: 'Date',
      dataIndex: 'date',
   },
   {
      title: 'Song',
      dataIndex: 'song'
   },
   {
      title: 'Duration',
      dataIndex: 'duration',
      render: (seconds: number) => {
         if (seconds) {
            const minutesComponent: number = parseInt((seconds / 60).toFixed(0));
            const secondsComponent: number = seconds % 60;
            return (
               <>
                  {minutesComponent}:{secondsComponent.toString().padStart(2, '0')}
               </>
            );
         }
      }
   },
   {
      title: 'City',
      dataIndex: 'city'
   },
   {
      title: 'State',
      dataIndex: 'state'
   },
   {
      title: 'Listen',
      dataIndex: 'nugs_id',
      render: (id: string) => {
         if (id) {
            return (
               <Typography.Link href={`https://play.nugs.net/#/catalog/recording/${id}`} target={'_blank'}>
                  nugs.net
               </Typography.Link>
            );
         }
      }
   }
];

export default Discover;
