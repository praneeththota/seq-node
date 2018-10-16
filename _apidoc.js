/**
 * @api {get} /users List all users
 * @apiName GetUsersList
 * @apiVersion 0.1.0
 * @apiGroup Users
 * @apiSuccess {Object[]} users Users's list
 * @apiSuccess {Number} users.id User id
 * @apiSuccess {String} users.firstName User FirstName
 * @apiSuccess {String} users.lastName User lastName
 * @apiSuccess {Date} users.updated_at Update's date
 * @apiSuccess {Date} users.created_at Register's date
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    [{
 *      "id": 1,
 *      "firstName": "Praneeth",
 *      "lastName": "Thota",
 *      "Email": "praneeth.thota@pnmac.com",
 *      "username": "pthota",
 *      "updated_at": "2016-02-10T15:46:51.778Z",
 *      "created_at": "2016-02-10T15:46:51.778Z"
 *    }]
 * @apiErrorExample {json} List error
 *    HTTP/1.1 500 Internal Server Error
 */
/**
 * @api {get} /users List all users
 * @apiName GetUsersList
 * @apiVersion 0.2.0
 * @apiGroup Users
 * @apiSuccess {Object[]} users Users's list
 * @apiSuccess {Number} users.id User id
 * @apiSuccess {String} users.firstName User FirstName
 * @apiSuccess {String} users.lastName User lastName
 * @apiSuccess {Date} users.updated_at Update's date
 * @apiSuccess {Date} users.created_at Register's date
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    [{
 *      "id": 1,
 *      "firstName": "Praneeth",
 *      "lastName": "Thota",
 *      "Email": "praneeth.thota@pnmac.com",
 *      "updated_at": "2016-02-10T15:46:51.778Z",
 *      "created_at": "2016-02-10T15:46:51.778Z"
 *    }]
 * @apiErrorExample {json} List error
 *    HTTP/1.1 500 Internal Server Error
 */