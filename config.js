'use strict';
exports.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://jonheye:password123@ds123625.mlab.com:23625/recipe-node-capstone';
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL || 'mongodb://testjonheye:testpassword123@ds121475.mlab.com:21475/test-recipe-node-capstone';
exports.PORT = process.env.PORT || 8080;
exports.JWT_SECRET = process.env.JWT_SECRET;
exports.JWT_EXPIRY = process.env.JWT_EXPIRY || '7d';

/*  DATABASE_URL
    username = jonheye
    password = password123
     */

     /*  TEST_DATABASE_URL
    username = testjonheye
    password = testpassword123
     */