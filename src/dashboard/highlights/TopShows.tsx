import React, {useEffect, useState} from 'react';
import {Table, Typography} from 'antd';
import styles from '../Dashboard.module.css';
import classNames from 'classnames';
import {fetchShows} from '../../ShowAPI';

function TopShows() {

   const [shows, setShows] = useState<[]>([]);
   const [isLoading, setIsLoading] = useState<boolean>(true);

   useEffect(() => {
      let mounted = true;
      fetchShows(0)
         .then(tracks => {
            if (mounted) {
               setIsLoading(false);
               setShows(tracks);
            }
         });
      return () => {
         mounted = false;
      };
   }, []);

   return (
      <div className={classNames(styles.block)} style={{marginBottom: 30}}>
         <Typography.Title level={5}>
            TOP RATED SHOWS
         </Typography.Title>

         <Table loading={isLoading}
                dataSource={shows}
                columns={columns}
                size={'small'}
         />
      </div>
   );
}

const columns = [
   {
      title: 'Rating',
      dataIndex: 'averageRating'
   },
   {
      title: 'Date',
      dataIndex: 'date'
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
      title: 'Venue',
      dataIndex: 'venue'
   },
   {
      title: 'Listen',
      dataIndex: 'nugsId',
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

export default TopShows;
