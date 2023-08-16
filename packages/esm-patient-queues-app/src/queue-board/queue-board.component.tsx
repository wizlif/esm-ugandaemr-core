import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocations } from '@openmrs/esm-framework';
import { Column, Grid } from '@carbon/react';
import styles from './queue-board.scss';
import BaseBoardComponent from './base-board/base-board.component';

interface QueueBoardProps {}

const QueueBoardComponent: React.FC<QueueBoardProps> = ({}) => {
  const { t } = useTranslation();

  const locations = useLocations();

  return (
    <div className={styles.boardBody}>
      <Grid>
        <Column sm={8} md={8} lg={8}>
          <BaseBoardComponent title={'Serving'} status={'picked'} hasBorder={true} />
        </Column>
        <Column sm={8} md={8} lg={8}>
          <BaseBoardComponent title={'Waiting'} status={'pending'} />
        </Column>
      </Grid>
    </div>
  );
};

export default QueueBoardComponent;
