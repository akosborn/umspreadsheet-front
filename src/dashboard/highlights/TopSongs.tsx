import React, {useEffect, useState} from 'react';
import {Table, Typography} from 'antd';
import styles from '../Dashboard.module.css';
import classNames from 'classnames';
import {fetchTracks} from '../../TrackAPI';

function TopSongs() {

   const [tracks, setTracks] = useState<[]>([]);
   const [tracksAreLoading, setTracksAreLoading] = useState<boolean>(true);

   useEffect(() => {
      let mounted = true;
      fetchTracks(0)
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
         <Typography.Title level={5}>
            TOP RATED SONGS
         </Typography.Title>

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
      title: 'Rating',
      dataIndex: ['averageRating'],
   },
   {
      title: 'Date',
      dataIndex: ['show', 'date'],
   },
   {
      title: 'Song',
      dataIndex: 'song'
   },
   {
      title: 'Duration',
      dataIndex: 'length',
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
      dataIndex: ['show', 'city'],
   },
   {
      title: 'State',
      dataIndex: ['show', 'state'],
   },
   {
      title: 'Venue',
      dataIndex: ['show', 'venue'],
   },
   {
      title: 'Listen',
      dataIndex: ['show', 'nugsId'],
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

export default TopSongs;
