interface LastTravels {
    id: number;
    country: string;
    city: string;
    image: string;
    startDate: Date;
    endDate: Date;
}

export const lastTravels: LastTravels[] = [
    {
        id: 5,
        country: 'Poland',
        city: 'Wroclaw',
        image: 'https://images.pexels.com/photos/14412062/pexels-photo-14412062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        startDate: new Date('2024-02-24'),
        endDate: new Date('2024-02-25'),
    },
    {
        id: 6,
        country: 'Italy',
        city: 'Rome',
        image: 'https://images.pexels.com/photos/753639/pexels-photo-753639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        startDate: new Date('2024-01-17'),
        endDate: new Date('2024-02-19'),
    },
    {
        id: 7,
        country: 'Hungary',
        city: 'Budapest',
        image: 'https://images.pexels.com/photos/732057/pexels-photo-732057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        startDate: new Date('2023-02-09'),
        endDate: new Date('2023-02-10'),
    },
    {
        id: 8,
        country: 'Italy',
        city: 'Milano',
        image: 'https://images.pexels.com/photos/9574938/pexels-photo-9574938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        startDate: new Date('2022-10-17'),
        endDate: new Date('2022-10-18'),
    },
    {
        id: 9,
        country: 'Croatia',
        city: 'Tribunj',
        image: 'https://images.unsplash.com/photo-1554393578-97127fb273cc?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        startDate: new Date('2021-09-17'),
        endDate: new Date('2021-09-26'),
    }
]