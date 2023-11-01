import { CarInterface } from 'interfaces/car';
import { DashboardInterface } from 'interfaces/dashboard';
import { GetQueryInterface } from 'interfaces';

export interface CompanyInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  tenant_id: string;
  car?: CarInterface[];
  dashboard?: DashboardInterface[];

  _count?: {
    car?: number;
    dashboard?: number;
  };
}

export interface CompanyGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  tenant_id?: string;
}
