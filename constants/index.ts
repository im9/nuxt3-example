interface IkeyValue {
  label: string;
  value: any;
}

export const ContactTypes: IkeyValue[] = [
  { label: "Phone", value: 1 },
  { label: "Mail", value: 2 },
];

export const AccountTypes: IkeyValue[] = [
  { label: "Personal", value: 1 },
  { label: "Business", value: 2 },
];
