import { OperationInterface } from 'interfaces/operation';
import { CompanyInterface } from 'interfaces/company';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface DashboardInterface {
  id?: string;
  name: string;
  status: string;
  last_updated: any;
  company_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  operation?: OperationInterface[];
  company?: CompanyInterface;
  user?: UserInterface;
  _count?: {
    operation?: number;
  };
}

export interface DashboardGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  status?: string;
  company_id?: string;
  user_id?: string;
}
