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
    const { username, password } = JSON.parse(event.body);

    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (error, results) => {
            if (error) {
                console.error('Login failed: ', error);
                reject('Internal Server Error');
            } else {
                if (results.length > 0) {
                    console.log('Login successful.');
                    resolve({
                        statusCode: 200,
                        body: JSON.stringify({ message: 'Login successful' })
                    });
                } else {
                    console.log('Invalid username or password.');
                    resolve({
                        statusCode: 401,
                        body: JSON.stringify({ message: 'Invalid username or password' })
                    });
                }
            }
        });
    });
};
