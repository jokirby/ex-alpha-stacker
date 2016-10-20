var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

function stackletters(theAlphabetArray) {

		var alphabetString = "";

		for (var i = 0; i < alphabet.length; i++) {

			// console.log(alphabet[i]);
			alphabetString += alphabet[i];
			// console.log(alphabetString);

			if ((i + 1) % 3 === 0) {
				alphabetString += " ";
		}
	}
	// console.log("Entire loop" + alphabetString);
}

stackletters(alphabet)