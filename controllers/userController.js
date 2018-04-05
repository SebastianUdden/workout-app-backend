var userController = function(User) {
    var post = function(req, res) {
        var user = new User(req.body);

        if (!req.body.name) {
            res.status(400);
            res.send('Name is required');
        } else {
            user.save();
            res.status(201)
            res.send(user);
        }
    };

    var get = function(req, res) {
        var query = getQuery(req, ['name', 'height', 'weight', 'bodyFat']);
        
        User.find(query, function(err, users) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.json(users);
            }
        });
    };

    return {
        post: post, 
        get: get
    }
}

function getQuery(req, properties) {
    let query = {};
    for(property of properties) {
        if (req.query[property]) {
            query[property] = req.query[property];
        }
    }
    return query;
}

module.exports = userController;