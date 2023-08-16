import { patientQueueRequest } from '../active-visits/patient-queues.resource';

export function usePatientQueuesListByStatus(status: string) {
  const apiUrl = `/ws/rest/v1/patientqueue?v=full&status=${status}`;
  return patientQueueRequest(apiUrl);
}
