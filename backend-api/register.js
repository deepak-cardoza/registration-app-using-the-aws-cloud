const mysql = require('mysql');

// RDS MySQL DB configuration
const dbConfig = {
  host: 'your-rds-endpoint',
  user: 'your-username',
  password: 'your-password',
  database: 'your-database-name'
};

// Create connection to MySQL database
const connection = mysql.createConnection(dbConfig);

exports.handler = async (event) => {
    const { username, email, password } = JSON.parse(event.body);

    return new Promise((resolve, reject) => {
        connection.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, password], (error, results) => {
            if (error) {
                console.error('Registration failed: ', error);
                reject('Internal Server Error');
            } else {
                console.log('Registration successful.');
                resolve({
                    statusCode: 200,
                    body: JSON.stringify({ message: 'Registration successful' })
                });
            }
        });
    });
};
