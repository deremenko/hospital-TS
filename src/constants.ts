import { generateUniqueId } from "./helpers/generateUniqueId";

export const API_URL: string = 'http://localhost:8000';

interface Doctor {
  id: string;
  label: string;
}

export const doctorList: Doctor[] = [
  { id: generateUniqueId(), label: 'Доктор Менгеле' },
  { id: generateUniqueId(), label: 'Доктор Хирт' },
  { id: generateUniqueId(), label: 'Доктор Криг' },
];

interface TableHeader {
  value: string;
}

export const tableHeaderNames: TableHeader[] = [
  { value: 'Имя' },
  { value: 'Доктор' },
  { value: 'Дата' },
  { value: 'Жалоба' },
  { value: '' },
];

interface SortField {
  id: string;
  label: string;
  value: string;
}

export const sortFieldName: SortField[] = [
  { id: generateUniqueId(), label: 'Имя', value: 'patient' },
  { id: generateUniqueId(), label: 'Доктор', value: 'doctor' },
  { id: generateUniqueId(), label: 'Дата', value: 'date' },
];

interface SortDirectionOption {
  id: string;
  label: string;
}

export const sortDirectionOptions: SortDirectionOption[] = [
  { id: generateUniqueId(), label: 'По возрастанию' },
  { id: generateUniqueId(), label: 'По убыванию' },
];

export const defaultTime: string = "T10T00:00:00.000Z";
