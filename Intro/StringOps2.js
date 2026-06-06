var WelcomeNotes = "Hello!, Welcome to JS, How are you you you ?";

console.log("After the Eliminated the spaces : " + WelcomeNotes.trim());
console.log("The starting index of W : " + WelcomeNotes.indexOf("W"));
console.log("The starting Last index of W : " + WelcomeNotes.lastIndexOf("Welcome"));
console.log("If Found of JS : " + WelcomeNotes.search("JS"));
console.log("Using match() : " + WelcomeNotes.match("you"));
console.log("Using MatchAll() : " + Array.from(WelcomeNotes.matchAll("you")));
