//  cú pháp tạo interface: ng g i ten-interface
import {AccountRole} from "./account-role";

export interface Account {
  accountName: string;
  password: string;
  enable: boolean;
  accountRole: AccountRole[]
}
