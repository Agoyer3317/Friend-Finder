let friendDB =  require('../data/friends');

module.exports = function(app){
      app.get("/friends", function(req, res) {
       console.log(friendDB);
        res.json(friendDB);
      });

      app.post('/friends', function(req, res){
        let compareDifference = req.body.score.length * 5;
        let friendPosition = {};

          for (let i = 0; i < friendDB.length; i++) {
            let totalDifference = 0;
            for (let j = 0; j < friendDB[i].score.length; j++) {
               totalDifference += Math.abs(friendDB[i].score[j] -  req.body.score[j])
            }
            if (totalDifference <= compareDifference) {
              compareDifference = totalDifference;
              friendPosition = friendDB[i];
            } 
          }
      console.log(friendPosition);    
      res.json(friendPosition);
      })
    };

 