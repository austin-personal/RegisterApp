const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const AWS = require('aws-sdk');

const app = express();
const port = 3000;

app.use(bodyParser.json());

//AWS configure
AWS.config.update({
  region: 'us-east-1',
  credentials: new AWS.SharedIniFileCredentials({ profile: 'vscode' }),
});

// Configure AWS DynamoDB
const dynamodb = new AWS.DynamoDB.DocumentClient();
const tableName = 'project-1-db';

// Define a route to handle POST requests for registration
app.post('/register', (req, res) => {
  const { name, gender } = req.body;

  const params = {
    TableName: tableName,
    Item: {
      CustomerID: Date.now().toString(), // Using timestamp as a simple unique ID
      name: name,
      gender: gender,
    },
  };

  dynamodb.put(params, (err) => {
    if (err) {
      console.error('Error registering person:', err);
      res.status(500).send('Error registering person.');
    } else {
      console.log('Person registered successfully.');
      res.send('Person registered successfully.');
    }
  });
});

//ignore favicon.ico
app.get('/favicon.ico', (req, res) => res.status(204));

// Define a route to handle GET requests for retrieving people
app.get('/people', (req, res) => {
  const params = {
    TableName: tableName,
  };

  dynamodb.scan(params, (err, data) => {
    if (err) {
      console.error('Error getting people:', err);
      res.status(500).send('Error getting people.');
    } else {
      console.log('People retrieved successfully:', data.Items);
      res.json(data.Items);
    }
  });
});

//TEST Dynamodb connection
/*app.get('/test-dynamodb-connection', async (req, res) => {
  try {
    // Perform a basic DynamoDB operation as a test (put an item)
    const params = {
      TableName: tableName,
      Item: {
        CustomerID: 'test-item-id',
        name: 'test-value-1',
        gender: 'test-value-2',
      },
    };

    await dynamodb.put(params).promise();

    res.send('DynamoDB connection test successful!');
  } catch (error) {
    console.error('Error testing DynamoDB connection:', error);
    res.status(500).send('Error testing DynamoDB connection.');
  }
});*/

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'Public')));

// Start the Express application and listen on the specified port
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});