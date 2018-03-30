const Twitter = require('twitter');

const client = new Twitter({
    consumer_key: 'O6LITg07IGekJDFaDlIWhDV7V',
    consumer_secret: 'lSYxe4yTtENzrROLcMRcqJpgtfJTW4AXzhiHj61LbCAri8tzOc',
    access_token_key: '979626097297035264-SU7WGSkGnKaLJxtsS7AJSdqYKxjXgfc',
    access_token_secret: '3NncBFCjKNlAdoG2Oq3fjMdQeb1FCvG8D9XOZ12sUBnMl'
});


exports.getUserTweets = async function (req, res) {
    try {
        let data = await client.get('statuses/user_timeline' ,req.query);
        res.send(data);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
}