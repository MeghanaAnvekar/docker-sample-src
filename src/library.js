//dummy comment
const logger = require('./logger');
function calculateSquares(data){
	var nums = data.split("\n");
	var output = [];
	var x;
	var square; 

	for (i = 0; i < nums.length; i++) {
        x = parseInt(nums[i]);
        logger.log('Processing ' + x);
		if (!isNaN(x)){
			square = x * x;
			output.push(square);
		}
		
	  }
    return output;
}
module.exports.calculateSquares = calculateSquares;
