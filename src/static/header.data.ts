interface HeaderDataInterface {
  id: number;
  name: string;
  path: string;
}

export const HEADER_DATA: HeaderDataInterface[] = [
  {
    id: 1,
    name: 'home',
    path: '/',
  },
  {
    id: 2,
    name: 'dogs',
    path: '/dogs',
  },
  {
    id: 3,
    name: 'cats',
    path: '/cats',
  },
  {
    id: 4,
    name: 'teams',
    path: '/teams',
  },
  {
    id: 5,
    name: 'gallery',
    path: '/gallery',
  },
];

export const HEADER_DATA_2 = [
  {
    id: 1,
    name: 'services',
    path: '/services',
  },
  {
    id: 2,
    name: 'donate',
    path: '/donate',
  },
  {
    id: 3,
    name: 'contacts',
    path: '/contacts',
  },
];
