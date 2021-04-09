export default interface FilterList {
    status: string,
    customer: SelectOptions[],
}

interface SelectOptions {
    name: string;
    value: string;
  }