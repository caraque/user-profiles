import React from 'react';
import {render, screen} from '@testing-library/react';
import App from '../App';

const API_RESPONSE = {
    "results": [{
        "gender": "female",
        "name": {"title": "Miss", "first": "Jo", "last": "Jones"},
        "location": {
            "street": {"number": 5758, "name": "Mcgowen St"},
            "city": "Green Bay",
            "state": "Missouri",
            "country": "United States",
            "postcode": 24282,
            "coordinates": {"latitude": "88.6485", "longitude": "175.3698"},
            "timezone": {"offset": "+5:00", "description": "Ekaterinburg, Islamabad, Karachi, Tashkent"}
        },
        "email": "jo.jones@example.com",
        "login": {
            "uuid": "774a9767-24c3-4049-b12b-608741c26a69",
            "username": "sadkoala152",
            "password": "blond",
            "salt": "tXmcqLBf",
            "md5": "9f0b5abac4518dcc0a82680f0f5e1009",
            "sha1": "e28a734cae6f17c213a974462c5f7ab95897b56e",
            "sha256": "568c0d7ea19a006463dddf71a4d1e262f70d8c31dda98cb9850e5a397787748b"
        },
        "dob": {"date": "1974-04-27T19:04:36.861Z", "age": 48},
        "registered": {"date": "2010-08-15T19:34:41.262Z", "age": 12},
        "phone": "(171)-464-5838",
        "cell": "(783)-899-9981",
        "id": {"name": "SSN", "value": "111-99-2101"},
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/26.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/26.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/26.jpg"
        },
        "nat": "US"
    }], "info": {"seed": "bce06567d327f15d", "results": 1, "page": 1, "version": "1.3"}
};

describe("Test App", () => {
    global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve(API_RESPONSE),
        }),
    ) as jest.Mock;

    test('renders learn react link', () => {
        jest
            .spyOn(React, 'useState')
            .mockImplementationOnce(() => React.useState())
       render(<App/>);
    });
});

