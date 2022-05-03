-- Drop and recreate Widgets table (Example)
DROP TABLE IF EXISTS todos CASCADE;

CREATE TABLE todos (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE,
  status BOOLEAN DEFAULT FALSE
);
