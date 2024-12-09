import { Roles, RolesId } from './authorities-constants';

export interface IUser {
  username: string;
  password: string;
  role?: Roles | undefined;
  roleId?: RolesId | undefined;
}
