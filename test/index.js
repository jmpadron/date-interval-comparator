var should = require('chai').should(),
    date_interval_comparator = require('../index'),
    compare = date_interval_comparator.compare;

describe("#compare", function(){
    it('For A=["06/05/2015", "06/10/2015"] and B=["05/05/2015", "05/10/2015"] result is A_GREATER_THAN_B', function() {
    	compare(["06/05/2015", "06/10/2015"], ["05/05/2015", "05/10/2015"]).should.equal("A_GREATER_THAN_B");
    });

  	it('For A=["06/01/2015", "06/05/2015"] and B=["06/10/2015", "06/15/2015"] result is A_LESS_THAN_B', function(){
  		compare(["06/01/2015", "06/05/2015"], ["06/10/2015", "06/15/2015"]).should.equal("A_LESS_THAN_B");
  	});

  	it('For A=["05/05/2015", "05/10/2015"] and B=["05/05/2015", "05/10/2015"] result is A_EQUAL_B', function(){
  		compare(["05/05/2015", "05/10/2015"], ["05/05/2015", "05/10/2015"]).should.equal("A_EQUAL_B");
  	});

  	it('For A=["06/05/2015", "06/10/2015"] and B=["06/10/2015", "06/20/2015"] result is A_INTERSECT_B', function(){
  		compare(["06/05/2015", "06/10/2015"], ["06/10/2015", "06/20/2015"]).should.equal("A_INTERSECT_B");
  	});

  	it('For A=["06/01/2015", "06/25/2015"] and B=["06/05/2015", "06/20/2015"] result is B_SUBSET_A', function(){
  		compare(["06/01/2015", "06/25/2015"], ["06/05/2015", "06/20/2015"]).should.equal("B_SUBSET_A");
  	});

  	it('For A=["06/05/2015", "06/20/2015"] and B=["06/01/2015", "06/25/2015"] result is A_SUBSET_B', function(){
  		compare(["06/05/2015", "06/20/2015"], ["06/01/2015", "06/25/2015"]).should.equal("A_SUBSET_B");
  	});

  	it('For A=["06/20/2015", "06/29/2015"] and B=["06/01/2015", "06/25/2015"] result is B_INTERSECT_A', function(){
  		compare(["06/20/2015", "06/29/2015"], ["06/01/2015", "06/25/2015"]).should.equal("B_INTERSECT_A");
  	});

  	it('For A=[null, "06/30/2015"] and B=["06/01/2015", "06/25/2015"] result is B_SUBSET_A', function(){
  		compare([null, "06/30/2015"], ["06/01/2015", "06/25/2015"]).should.equal("B_SUBSET_A");
  	});

  	it('For A=["06/01/2015", null] and B=["06/01/2015", "06/25/2015"] result is B_SUBSET_A', function(){
  		compare(["06/01/2015", null], ["06/01/2015", "06/25/2015"]).should.equal("B_SUBSET_A");
  	});

    it('For A=["06/01/2015", "06/01/2015"] and B=["06/02/2015", "06/02/2015"] result is A_LESS_THAN_B', function(){
      compare(["06/01/2015", "06/01/2015"], ["06/02/2015", "06/02/2015"]).should.equal("A_LESS_THAN_B");
    });

    it('For A=["06/01/2015", "06/05/2015"] and B=["06/01/2015", "06/10/2015"] result is A_SUBSET_B', function(){
      compare(["06/01/2015", "06/05/2015"], ["06/01/2015", "06/10/2015"]).should.equal("A_SUBSET_B");
    });

  	it('For A=["05/05/2015 10:30:00", "05/10/2015 10:50:00"] and B=["05/05/2015 10:35:00", "05/10/2015 10:40:00"] result is B_SUBSET_A', function(){
  		compare(["05/05/2015 10:30:00", "05/10/2015 10:50:00"], ["05/05/2015 10:35:00", "05/10/2015 10:40:00"]).should.equal("B_SUBSET_A");
  	});

});