const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModel')

//@desc    Get goals
//@route   GET /api/goals 
//@access  Private
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find()
    res.json(goals)
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
    const goal = await Goal.create(({
        text: req.body.text
    }))
    res.json(goal)
})


//@desc    Update goals
//@route   PUT /api/goal/:id 
//@access  Private
const upadateGoal = asyncHandler(async (req, res) => {
    const goal = Goal.findById(req.params.id)
    if (!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedGoal)
})


//@desc    delete goals
//@route   DELETE /api/goals/:id
//@access  Private
const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id)

    if (!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }
    await goal.remove()

    res.status(200).json({ id: req.params.id })
})



module.exports = {
    getGoals,
    setGoal, upadateGoal, deleteGoal
}