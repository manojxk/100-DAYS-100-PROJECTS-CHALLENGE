const asyncHandler = require('express-async-handler')

//@desc    Get goals
//@route   GET /api/goals 
//@access  Private
const getGoals = asyncHandler(async (req, res) => {
    res.json({ mess: "get goals" })
})
//@desc    set goals
//@route   POST /api/goals 
//@access  Private
const setGoal = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        // Way.1 : res.status(400).json({ msessage: "include text" })
        // Way.2 :
        res.status(400)
        throw new Error('Please add a text field')


    }
    console.log(typeof req.body)
    res.json({ mess: "set goal" })
})
//@desc    Update goals
//@route   PUT /api/goal/:id 
//@access  Private
const upadateGoal = asyncHandler(async (req, res) => {
    res.json({ mess: "upadate goal" })
})
//@desc    delete goals
//@route   DELETE /api/goals/:id
//@access  Private
const deleteGoal = asyncHandler(async (req, res) => {
    res.json({ mess: "delete goal" })
})



module.exports = {
    getGoals,
    setGoal, upadateGoal, deleteGoal
}