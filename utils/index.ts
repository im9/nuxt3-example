import * as constants from "@/constants";

export const contactType = (value: number): string => {
  return constants.ContactTypes.find(
    (contactType) => contactType.value === Number(value)
  )?.label;
};

export const accountType = (value: number): string => {
  return constants.AccountTypes.find(
    (accountType) => accountType.value === Number(value)
  )?.label;
};
