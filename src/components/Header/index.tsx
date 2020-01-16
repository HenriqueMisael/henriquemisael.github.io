import React, { FunctionComponent } from 'react';
import {Overlay, Card} from './styled-wrappers';
import { IPersonalInfo } from '../../model/IPersonalInfo';

interface OwnProps {
  personalInfo: IPersonalInfo
}

type Props = OwnProps

export default ({personalInfo}:Props) => {
  return (
    <Overlay>
      <Card/>
    </Overlay>
  )
};

