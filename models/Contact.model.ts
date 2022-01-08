export interface Contact {
  firstName: string;
  lastName: string;
  accountType: number;
  company?: string;
  phone: string;
  email: string;
  contactMethods: number[];
  subject: string;
  message: string;
}
