const required = (value: any): Boolean => !!value;

const emailFormat = (value: string): Boolean => {
  const regex =
    /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;
  return value ? !!value.match(regex) : true;
};

const phoneNumberFormat = (value: string): Boolean => {
  return value ? !!value.match(/\d{2,3}-\d{1,4}-\d{4}$/) : true;
};

export const useConditions = () => {
  return {
    required,
    emailFormat,
    phoneNumberFormat,
  };
};
