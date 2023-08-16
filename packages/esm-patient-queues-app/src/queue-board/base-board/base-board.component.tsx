import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocations } from '@openmrs/esm-framework';
import { usePatientQueuesListByStatus } from '../queue-board.resource';
import { InlineLoading, Tile, AspectRatio } from '@carbon/react';
import { trimVisitNumber } from '../../helpers/functions';
import styles from './base-board.scss';

interface BaseBoardProps {
  title: string;
  status: string;
  hasBorder?: boolean;
}

const BaseBoardComponent: React.FC<BaseBoardProps> = ({ title, status, hasBorder }) => {
  const { t } = useTranslation();

  const locations = useLocations();
  const { patientQueueEntries, isLoading } = usePatientQueuesListByStatus(status);

  if (isLoading) return <InlineLoading />;
  return (
    <div
      style={{
        borderRight: hasBorder ? '1px solid grey' : '',
        height: '100vh',
        overflow: 'scroll',
        paddingRight: hasBorder ? '20px' : '',
      }}
    >
      <h1 className={styles.heading}>{title}</h1>
      {patientQueueEntries.reverse().map((queueEntry) => {
        return (
          <Tile className={styles.tile}>
            <h4 className={styles.tileText}>{queueEntry.locationToName}</h4>
            <h3>{trimVisitNumber(queueEntry.visitNumber)}</h3>
          </Tile>
        );
      })}
    </div>
  );
};

export default BaseBoardComponent;
