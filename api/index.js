const app = require('./config/express')();
const port = app.get('port');

require('./routes/index')(app); 

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
});