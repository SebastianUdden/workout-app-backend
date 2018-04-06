var userRegistryController = function(UserRegistry) {
    var post = function(req, res) {
        var userRegistry = new UserRegistry(req.body);

        if (!req.body.email) {
            res.status(400);
            res.send('Email is required');
        } else {
            userRegistry.save();
            res.status(201)
            res.send(userRegistry);
        }
    };

    var get = function(req, res) {
        var query = getQuery(req, ['userModelId', 'email', 'password']);
        
        UserRegistry.find(query, function(err, users) {
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

module.exports = userRegistryController;