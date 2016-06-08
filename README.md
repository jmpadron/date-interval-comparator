date-interval-comparator
========================

A small library that compares two date intervals. Dates should follow the RFC2822 standard (ready for Date.parse).

## Installation

	npm install date-interval-comparator --save

## Usage

	var comparator = require('date-interval-comparator');
	var A = ["06/05/2015", "06/10/2015"];
	var B = ["05/05/2015", "05/10/2015"];
	comparator.compare(A, B);

## Tests

	npm test

## Release History

  	0.1.0 Initial release