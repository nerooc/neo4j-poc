// CHECK NODE STATUS
MATCH (n) RETURN (n);

// We create the first Driver nodes
CREATE (n: Driver{name: 'Max', surname: 'Verstappen', image_url: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Max_Verstappen_2017_Malaysia_3_%28cropped%29.jpg'}) 
CREATE (n: Driver{name: 'Lewis', surname: 'Hamilton', image_url: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Lewis_Hamilton_2016_Malaysia_1.jpg'}) 
CREATE (n: Driver{name: 'Sergio', surname: 'Perez', image_url: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Sergio_P%C3%A9rez_2019_%28cropped%29.jpg'}) 
CREATE (n: Driver{name: 'Valtteri', surname: 'Bottas', image_url: 'https://upload.wikimedia.org/wikipedia/commons/3/36/F12019_Schloss_Gabelhofen_%2820%29_%28cropped%29.jpg'}) 


// We create the first Racetrack nodes
CREATE (n: Racetrack{name: 'Baku City Circuit', image_url: 'https://static.wikia.nocookie.net/automobile/images/e/ea/Baku-F1-Street-Circuit.png/revision/latest?cb=20181001150853'}) 
CREATE (n: Racetrack{name: 'Circuit de Monaco', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Circuit_Monaco.svg/982px-Circuit_Monaco.svg.png'}) 
CREATE (n: Racetrack{name: 'Interlagos Circuit', image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Circuit_Interlagos.svg/982px-Circuit_Interlagos.svg.png'}) 

// We create the first Team nodes
CREATE (n: Team{name: 'Red Bull Racing Honda', image_url: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/FIA_F1_Austria_2021_Nr._11_Perez.jpg'}) 
CREATE (n: Team{name: 'Mercedes-AMG Petronas F1 Team', image_url: 'https://upload.wikimedia.org/wikipedia/commons/2/27/FIA_F1_Austria_2021_Nr._44_Hamilton_%28side%29.jpg'})

// Creating relations: DRIVES_FOR
MATCH (d: Driver), (t: Team)
WHERE (d.name = 'Max' OR d.name = 'Sergio') AND t.name = 'Red Bull Racing Honda'
CREATE (d)-[dri:DRIVES_FOR]->(t)

MATCH (d: Driver), (t: Team)
WHERE (d.name = 'Lewis' OR d.name = 'Valtteri') AND t.name = 'Mercedes-AMG Petronas F1 Team'
CREATE (d)-[dri:DRIVES_FOR]->(t)

// Creating relations: WON_AT
MATCH (d: Driver), (r: Racetrack)
WHERE d.name = 'Lewis' AND r.name = 'Interlagos Circuit'
CREATE (d)-[won:WON_AT]->(r)

MATCH (d: Driver), (r: Racetrack)
WHERE d.name = 'Max' AND r.name = 'Circuit de Monaco'
CREATE (d)-[won:WON_AT]->(r)

MATCH (d: Driver), (r: Racetrack)
WHERE d.name = 'Sergio' AND r.name = 'Baku City Circuit'
CREATE (d)-[won:WON_AT]->(r)


// Delete relations
MATCH (n:Driver {name: 'Sergio'})-[r]->()
DELETE r