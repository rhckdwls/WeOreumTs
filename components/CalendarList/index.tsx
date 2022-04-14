import { CollapseButton } from '@components/DMList/styles';
import { IChannel, IUser } from '@typings/db';
import fetcher from '@utils/fetcher';
import React, { FC, useCallback, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useSWR from 'swr';

interface Props {
  channelData?: IChannel[];
  userData?: IUser;
}

const CalendarList: FC<Props> = () => {
  const { workspace } = useParams<{ workspace?: string }>();
  const [channelCollapse, setChannelCollapse] = useState(false);
  const { data: userData } = useSWR<IUser>('/api/users', fetcher, {
    dedupingInterval: 2000, // 2초
  });

  return (
    <>
      <h2>
        <CollapseButton collapse={channelCollapse}>◼</CollapseButton>
        <span>Calendar</span>
      </h2>
      <div>
        <Link to={`/workspace/${workspace}/calendar`}># 일반</Link>
      </div>
    </>
  );
};

export default CalendarList;
