const fs = require('fs');

const filePath = './stations-raw.json';

// Station latitude and longitude information
const stationWithCoordinates = {
    "Stasiun Lebak Bulus Grab": {lat: -6.289373380847638, lon: 106.77401898596473},
    "Stasiun Fatmawati Indomaret": {lat: -6.292364680091213, lon: 106.79250291218476},
    "Stasiun Cipete Raya": {lat: -6.278265041078112, lon: 106.79732630262048},
    "Stasiun Haji Nawi": {lat: -6.266680121630575, lon: 106.7973351350926},
    "Stasiun Blok A": {lat: -6.255752389342514, lon: 106.79713726437556},
    "Stasiun Blok M BCA": {lat: -6.2444701737155075, lon: 106.79810927122621},
    "Stasiun ASEAN": {lat: -6.238714870678382, lon: 106.79860956832525},
    "Stasiun Senayan Mastercard": {lat: -6.226742890969406, lon: 106.80248201428832},
    "Stasiun Istora Mandiri": {lat: -6.222364685908974, lon: 106.80858872228184},
    "Stasiun Bendungan Hilir": {lat: -6.214998243949956, lon: 106.81795395501513},
    "Stasiun Setiabudi Astra": {lat: -6.208863595726317, lon: 106.82150130870534},
    "Stasiun Dukuh Atas BNI": {lat: -6.200806853187486, lon: 106.82280010695871},
    "Stasiun Bundaran HI": {lat: -6.191882843436622, lon: 106.82295674688814}
};

try {
    // Read the JSON file synchronously
    const data = fs.readFileSync(filePath, 'utf8');
    const schedules = JSON.parse(data);


    const clearedSchedules = schedules.map(schedule => ({
        station: schedule.title,
        schedules_to_lebak_bulus: schedule.jadwal_lb_biasa,
        schedules_to_lebak_bulus_holiday: schedule.jadwal_lb_libur,
        schedules_to_hi: schedule.jadwal_hi_biasa,
        schedules_to_hi_holiday: schedule.jadwal_hi_libur,
    }));
    // Add latitude and longitude to each schedule
    const schedulesWithLatLong = clearedSchedules.map(schedule => {
        const coords = stationWithCoordinates[schedule.station] || {};
        return {
            ...schedule,
            latitude: coords.lat,
            longitude: coords.lon
        };
    });

    fs.writeFileSync('./stations.json', JSON.stringify(schedulesWithLatLong, null, 2), 'utf8');
} catch (err) {
    console.error('Error:', err);
}
