interface IncommingTravels {
    id: number;
    country: string;
    city: string;
    image: string;
    startDate: Date;
    endDate: Date;
}

export const incommingTravels: IncommingTravels[] = [
    {
        id: 1,
        country: 'Norway',
        city: 'Oslo',
        image: 'https://images.pexels.com/photos/15103965/pexels-photo-15103965/free-photo-of-city-buildings-near-a-river.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        startDate: new Date('2024-03-18'),
        endDate: new Date('2024-03-19'),
    },
    {
        id: 2,
        country: 'Spain',
        city: 'Barcelona',
        image: 'https://images.pexels.com/photos/1782436/pexels-photo-1782436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        startDate: new Date('2024-05-28'),
        endDate: new Date('2024-06-03'),
    },
    {
        id: 3,
        country: 'Poland',
        city: 'Warsaw',
        image: 'https://images.pexels.com/photos/10676/Warsaw-center-free-license-CC0.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        startDate: new Date('2024-07-01'),
        endDate: new Date('2024-07-03')
    },
    {
        id: 4,
        country: 'Great Britain',
        city: 'London',
        image: 'https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        startDate: new Date('2024-11-20'),
        endDate: new Date('2024-11-24')
    }
]