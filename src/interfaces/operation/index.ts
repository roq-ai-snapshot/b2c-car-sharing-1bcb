import { DashboardInterface } from 'interfaces/dashboard';
import { GetQueryInterface } from 'interfaces';

export interface OperationInterface {
  id?: string;
  type: string;
  status: string;
  start_time: any;
  end_time: any;
  dashboard_id: string;
  created_at?: any;
  updated_at?: any;

  dashboard?: DashboardInterface;
  _count?: {};
}

export interface OperationGetQueryInterface extends GetQueryInterface {
  id?: string;
  type?: string;
  status?: string;
  dashboard_id?: string;
}
