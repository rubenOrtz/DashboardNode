const express = require("express")
const app = express();
const PORT = 5000
const path = require("path")





/*AAA*/
app.use(express.static(path.join(__dirname, './react/dashboard/build')));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, './react/dashboard/build', 'index.html'));
});

app.listen(PORT, () => console.log(`running on ${PORT}`));