import React from 'react';

import ServerButton from '../ServerButton';

import {Container, Separator} from './styles'

const ServerList: React.FC = () => {
  return <Container>
    <ServerButton isHome/>
    <Separator/>
    <ServerButton mentions={45}/>
    <ServerButton hasNotifications/>
    <ServerButton mentions={3}/>
    <ServerButton/>
    <ServerButton hasNotifications/>
    <ServerButton/>
    <ServerButton mentions={5}/>
    <ServerButton mentions={72}/>
    <ServerButton/>
    <ServerButton hasNotifications/>
    <ServerButton hasNotifications/>
  </Container>
}

export default ServerList 