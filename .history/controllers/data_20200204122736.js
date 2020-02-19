const Resource = require('../models/Resource');

// @desc    Get all Resource
// @route   GET /api/v1/resources
// @access  Public
exports.getResources = async (req, res, next) => {
    try {
        const resource = await Resource.find();

        res.status(200).json({
            success: true,
            count: resources.length,
            data: resources
        });
    } catch (error) {
        next(error);
    }
};


// @desc    Get single Resource
// @route   GET /api/v1/resources/:id
// @access  Public
exports.getResource = async (req, res, next) => {
    try {
        const resource = await Resource.findById(req.params.id);

        if (!resource) {
            return res.status(404).json({
                success: false
            });
        }

        res.status(200).json({
            success: true,
            data: resource
        });
    } catch (error) {
        res.status(400).json({
            success: false
        });
    }
};

// @desc    Create new Resource
// @route   POST /api/v1/resources
// @access  Public
exports.createResource = async (req, res, next) => {
    try {
        const resource = await Resource.create(req.body);

        res.status(201).json({
            success: true,
            data: resource
        });
    } catch (error) {
        res.status(400).json({
            success: false
        });
    }
};

// @desc    Update single Resource
// @route   PUT /api/v1/resources/:id
// @access  Public


// @desc    Delete single Resource
// @route   DELETE /api/v1/resources/:id
// @access  Public