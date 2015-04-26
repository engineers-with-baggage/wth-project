var myObj = {
	"name": "Blake",
	"origin": {
		"code": "ATL",
		"latitude": "33.7550",
		"longitude": "-84.3900"
	},
	"destination": {
		"code": "BOS",
		"latitude": "42.3631",
		"longitude": "-71.0064"
	},
	"survey": {
		"hometownTip": "The Varsity isn't that great, but you still gotta go."
	},
	"favoriteIceCream": ["chocolate","pistacio"]
};

var stuff = myObj.origin.code;



// For Will

// Option 1

var cityInfo = {

	"city": "NameOfCity",
	"country": "NameOfCountry",
	"lat": "##.#####",
	"long": "##.####"

};

// Option 2

var cityInfo = {
	"city": ["NameOfCity","NameOfCountry"],
	"coords": ["##.####", "##.####"]
};