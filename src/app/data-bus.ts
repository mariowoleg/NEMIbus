export interface BusService{
    id: number;
    name: string;
    area: string;
    client: string;
    duration: string;
    active: boolean;
    latitude: number;
    longitude: number;
}

export type Time = {
    hours: number;
    minutes: number;
};

export const busServices : Array<BusService> = [
    {
        "id": 1,
        "name": "Servicio Centro",
        "area": "Centro",
        "client": "Empresa A",
        "duration": "30 minutos",
        "active": true,
        "latitude": 40.712776,
        "longitude": -74.005974
    },
    {
        "id": 2,
        "name": "Servicio Norte",
        "area": "Norte",
        "client": "Empresa B",
        "duration": "45 minutos",
        "active": false,
        "latitude": 40.759011,
        "longitude": -73.984472
    },
    {
        "id": 3,
        "name": "Servicio Sur",
        "area": "Sur",
        "client": "Empresa C",
        "duration": "1 hora",
        "active": true,
        "latitude": 40.730610,
        "longitude": -73.935242
    },
    {
        "id": 4,
        "name": "Servicio Este",
        "area": "Este",
        "client": "Empresa D",
        "duration": "50 minutos",
        "active": true,
        "latitude": 40.741895,
        "longitude": -73.989308
    },
    {
        "id": 5,
        "name": "Servicio Oeste",
        "area": "Oeste",
        "client": "Empresa E",
        "duration": "35 minutos",
        "active": false,
        "latitude": 40.712217,
        "longitude": -74.016058
    },
    {
        "id": 6,
        "name": "Servicio Express Norte",
        "area": "Norte",
        "client": "Empresa F",
        "duration": "25 minutos",
        "active": true,
        "latitude": 40.748817,
        "longitude": -73.985428
    },
    {
        "id": 7,
        "name": "Servicio Express Sur",
        "area": "Sur",
        "client": "Empresa G",
        "duration": "20 minutos",
        "active": true,
        "latitude": 40.712776,
        "longitude": -74.013379
    },
    {
        "id": 8,
        "name": "Servicio Nocturno Centro",
        "area": "Centro",
        "client": "Empresa H",
        "duration": "1 hora 15 minutos",
        "active": false,
        "latitude": 40.730610,
        "longitude": -73.935242
    },
    {
        "id": 9,
        "name": "Servicio Universitario Este",
        "area": "Este",
        "client": "Empresa I",
        "duration": "40 minutos",
        "active": true,
        "latitude": 40.729512,
        "longitude": -73.996460
    },
    {
        "id": 10,
        "name": "Servicio Comercial Oeste",
        "area": "Oeste",
        "client": "Empresa J",
        "duration": "55 minutos",
        "active": false,
        "latitude": 40.735657,
        "longitude": -74.172366
    }
]