const express = require("express");
const router = express.Router();
const usersController = require("../../controllers/users.controller");
router
  .route("/all")
  /**
   * @api {get} /tools all user
   * @apiDescription Get all the tools
   * @apiPermission Admin
   *
   * @apiHeader (String) Authorization User's access token
   *
   * @apiParam {Number(1-)}   [page=1]  List page
   * @apiParam {Number{1-100}}    [limit-10]  User per page
   *
   * @apiSuccess {Object[]} all the tools
   * @apiError {Unauthorized 401} Unauthorized Only authorized users can access the data
   * @apiError {Forbidden 403} Forbidden Only admin can access the data
   */
  .get(usersController.getAllUsers)
  /**
   * @api {get} /tools all user
   * @apiDescription Get all the tools
   * @apiPermission Admin
   *
   * @apiHeader (String) Authorization User's access token
   *
   * @apiParam {Number(1-)}   [page=1]  List page
   * @apiParam {Number{1-100}}    [limit-10]  User per page
   *
   * @apiSuccess {Object[]} all the tools
   * @apiError {Unauthorized 401} Unauthorized Only authorized users can access the data
   * @apiError {Forbidden 403} Forbidden Only admin can access the data
   */
  .post(usersController.saveAUser);

router.route("/random").get(usersController.getRandomUser);
router.route("/save").post(usersController.saveNewUser);
router.route("/update/:id").patch(usersController.updateUser);
router.route("/bulk-update").patch(usersController.bulkUpdate);
router.route("/delete/:id").delete(usersController.deleteUser);

module.exports = router;
