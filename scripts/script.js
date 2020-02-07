(function(){
	

	/*
	> Vanilla Javascript for demos
	*/
	/* Aria live success demo */
	var liveForm = document.getElementById('liveForm');
	var liveFailTarget = document.getElementById('liveTarget');
	var liveText = document.getElementById('liveText');

	liveForm.addEventListener('submit', function(e){
		e.preventDefault();
		liveFailTarget.innerHTML = liveText.value;
	});

	/*Aria live fail demo*/
	var liveFormFail = document.getElementById('liveFormFail');
	var liveTargetFail = document.getElementById('liveTargetFail');
	var liveTextFail = document.getElementById('liveTextFail');

	liveFormFail.addEventListener('submit', function(e){
	  	e.preventDefault();
  		liveTargetFail.parentElement.setAttribute('aria-live','assertive');
    	liveTargetFail.innerHTML = liveTextFail.value;
	});
})();