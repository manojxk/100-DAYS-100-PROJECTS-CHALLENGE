const router = require('express').Router();
const { getGoals, setGoal, upadateGoal, deleteGoal } = require('../controllers/goalController');


router.get('/', getGoals)
router.post('/', setGoal)
// router.route('/:id').get(getGoals).post(setGoal)
// router.route('/:id').put(upadateGoal).delete(deleteGoal)
router.put('/:id', upadateGoal)
router.delete('/:id', deleteGoal)


module.exports = router