export interface Customer {
  name: string,
  company: string,
  phone: string,
  email: string,
  country: string,
  status: 'active' | 'inactive';
}