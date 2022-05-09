$(document).ready(function(){

$.ajax({
	url: 'http://localhost:5005/conversations/jitesh/execute',
type: 'POST',
contentType: 'application/json',
data: JSON.stringify({
"name": "action_greet_user",
"policy": "MappingPolicy",
"confidence": "0.98723"
}),
success: function(data, textStatus){
car response=(data)
setBotResponse(response.messages);
console.log("RasaResponse: ", data, "\n Status:", textStatus)
},
error: function(errorMessage){
setBotResponse(""):
console.log('Error' + errorMessage);
}
});
});