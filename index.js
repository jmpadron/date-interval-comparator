var exports = module.exports = {};

var DICResult = {
	A_LESS_THAN_B: "A_LESS_THAN_B",
	A_GREATER_THAN_B: "A_GREATER_THAN_B",
	A_EQUAL_B: "A_EQUAL_B",
	A_INTERSECT_B: "A_INTERSECT_B",
	B_SUBSET_A: "B_SUBSET_A",
	A_SUBSET_B: "A_SUBSET_B",
	B_INTERSECT_A: "B_INTERSECT_A"
};


/**
 * It checks if dates parse was successful
 * @param a_start_date
 * @param a_end_date
 * @param b_start_date
 * @param b_end_date
 */
function checkDates(a_start_date, a_end_date, b_start_date, b_end_date) {
    //checking date parse
    if(isNaN(a_start_date)){
        throw new Error("Start date of interval A is an invalid date.");
    }
    if(isNaN(a_end_date)){
        throw new Error("End date of interval A is an invalid date.");
    }
    if(isNaN(b_start_date)){
        throw new Error("Start date of interval B is an invalid date.");
    }
    if(isNaN(b_end_date)){
        throw new Error("End date of interval B is an invalid date.");
    }

    //checking rages
    if(a_start_date > a_end_date){
        throw new Error("Start date is bigger than end date on interval A.");
    }
    if(b_start_date > b_end_date){
        throw new Error("Start date is bigger than end date on interval B.");
    }
};

// Checks if something is an Array
function isArray(obj) {
    return (typeof obj == "object" && obj.constructor == Array)
}

function compare_engine(a_start_date, a_end_date, b_start_date, b_end_date){
    //equal
    if(a_start_date == b_start_date && a_end_date == b_end_date) {
        return DICResult.A_EQUAL_B;
    }

    //A_LESS_THAN_B
    if(a_start_date < b_start_date && a_end_date < b_start_date){
        return DICResult.A_LESS_THAN_B;
    }

    //A_GREATER_THAN_B
    if(b_start_date < a_start_date && b_end_date < a_start_date){
        return DICResult.A_GREATER_THAN_B;
    }

    //A_INTERSECT_B
    if(a_start_date < b_start_date && a_end_date >= b_start_date && a_end_date < b_end_date){
        return DICResult.A_INTERSECT_B;
    }

    //B_INTERSECT_A
    if(b_start_date < a_start_date && b_end_date >= a_start_date && b_end_date < a_end_date){
        return DICResult.B_INTERSECT_A;
    }

    //B_SUBSET_A
    if(a_start_date <= b_start_date && a_end_date >= b_end_date){
        return DICResult.B_SUBSET_A;
    }

    //A_SUBSET_B
    if(b_start_date <= a_start_date && b_end_date >= a_end_date){
        return DICResult.A_SUBSET_B;
    }

    //if it doesn't match with anyone, throw an exception.
    throw new Error("Unknown error. Probably a code bug.");
}


exports.compare = function(A, B){
    try{
        if((isArray(A) && A.length == 2) && (isArray(B) && B.length == 2)){
            var a_start_date = (A[0] != null) ? Date.parse(A[0]) : -9999999999999;
            var a_end_date =  (A[1] != null) ? Date.parse(A[1]) : 9999999999999;

            var b_start_date = (B[0] != null) ? Date.parse(B[0]) : -9999999999999;
            var b_end_date =  (B[1] != null) ? Date.parse(B[1]) : 9999999999999;

           	checkDates(a_start_date, a_end_date, b_start_date, b_end_date);
            return compare_engine(a_start_date, a_end_date, b_start_date, b_end_date);

        } else {
            throw new Error("Intervals needs to be arrays of two elements.");
        }
    } catch (e){
        console.log("There was an error: "+ e.message);
    }
};
