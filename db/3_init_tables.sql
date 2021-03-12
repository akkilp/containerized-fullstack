INSERT INTO users(
    name
) VALUES (
    'user1'
);

INSERT INTO users(
    name
) VALUES (
    'user2'
);

INSERT INTO users(
    name
) VALUES (
    'user3'
) RETURNING *;

INSERT INTO users(
    name
) VALUES (
    'user3'
);


INSERT INTO quotes(
    name,
    creator,
    quote
) VALUES 
    ('Paperi-T', '1', 'Sä koitat olla olematta klisee.\nMut normaalisti mun kaltaselle et antas ees sun nimee'),
    ('Paperi-T', '1', 'Mun jälkeen ei nimetä kaupunkei tai katuja\nMut äidit tulee kertoo susta varottavii satuja\nSun jälkeen nimetään tauti\nJokin vakava, mihin kuolee suu auki'),
    ('Notkea Rotta', '2', 'Lihapitoisuus sata prosenttia\nKuuntelet nyt katukielen dosenttia\nJota mikään ei enempää karmi\mKuin porvariston hillitty charmi');


