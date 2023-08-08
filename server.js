//basic setting express library
const express = require('express')
const app = express()
const multer = require('multer')
const fs = require('fs'); 

//use body parser
app.use(express.urlencoded({extended: true})) 

//launch a server on 8008 port and print message
app.listen(8008, function(){
  console.log('listening on 8008')
})

// Get HTML file (HOME)
// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html')

// })

//send form.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/form.html')

})

// Set up multer storage for uploaded files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // This is the folder where uploaded files will be stored
  },
  filename: function (req, file, cb) {
    // Generate a unique name for the uploaded file (you can use a package like uuid)
    const uniqueFilename = Date.now() + '-' + file.originalname;
    cb(null, uniqueFilename);
  },
});

// Create the multer instance using the storage configuration
const upload = multer({ storage });

// Serve static files in the "uploads" folder
app.use('/uploads', express.static('uploads'));

// Ensure the "uploads" folder exists, create it if it doesn't
const uploadDirectory = './uploads';
if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory);
}

// Handle POST requests to /add with the upload middleware
app.post('/add', upload.single('stlfile'), (req, res) => {
  // req.file contains the uploaded file information
  if (req.file) {
    console.log('File uploaded successfully:', req.file.filename);
  } else {
    console.log('No file uploaded.');
  }

  res.send('Transmission completed!');
});