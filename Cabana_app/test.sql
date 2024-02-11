-- SQLite
CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    pas TEXT NOT NULL,
    email TEXT NOT NULL,
);

INSERT INTO users (pas, email) VALUES ('JohnMama', 'john@example.com');
UPDATE users WHERE pas = 'JohnMama';
DELETE FROM users WHERE pas = 'JohnMama';
CREATE INDEX idx_pas ON users(pas);
