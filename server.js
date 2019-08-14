var express = require('express');
var app = express();
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('build'));
}

app.get('*', (request, response) => {
	response.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);
