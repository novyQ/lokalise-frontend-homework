export type CardType = {
  caseSensitive: boolean;
  createdAt: string;
  createdBy: { [key: string]: string };
  description: string;
  forbidden: boolean;
  id: string;
  title: string;
  translatable: false;
};
