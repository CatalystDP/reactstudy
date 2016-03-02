/**
 * Created by taddeng on 2016/2/18.
 */
exports.init = function (router) {

    router.all('/doku/redirect', function (req, res, next) {
        console.log(req.body);
        res.render('doku/redirect', {
            dokuResult:JSON.stringify(req.body)
        }, function (err, html) {
            if(!err){
                res.send(html);
            }else{
                res.send(JSON.stringify({
                    ret:-9
                }))
            }
        });

    });
};