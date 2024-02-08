import { Phone } from '@models';

export type Provider = {
  id: string;
  name: string;
  phones: Phone[];
};
