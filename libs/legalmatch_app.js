var legalmatch_app = angular.module("legalmatch_app",[]);
legalmatch_app.controller("legalmatch_ctrl",function($scope){

	$scope.show_text = false;
	$scope.category_show = true;
	$scope.reviews_show = false;
	$scope.legal_services = [];
	$scope.category_value = '0';
	$scope.reviewers = [{
		"image_url":"img/user1.png",
		"full_name":"Mitchel M.",
		"address":"Cherry Hill, NJ",
		"title":"Family Law",
		"comments":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ..."
	},
	{
		"image_url":"img/user2.png",
		"full_name":"Joel C.",
		"address":"Little Rock, AK",
		"title":"Job and Employement Law",
		"comments":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ..."
	},
	{
		"image_url":"img/user3.png",
		"full_name":"Brigida R.",
		"address":"Dallas, TX",
		"title":"Family Law",
		"comments":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ..."
	}
	];

	$scope.morris_place = [
		{
			"id":"1",
			"title":"Family"
		},
		{
			"id":"2",
			"title":"Criminal Defense"
		},
		{
			"id":"3",
			"title":"Business"
		},
		{
			"id":"4",
			"title":"Personal Injury"
		},
		{
			"id":"5",
			"title":"Bankruptcy and Finances"
		},
		{
			"id":"6",
			"title":"products and Services"
		},
		{
			"id":"7",
			"title":"Employement"
		},
		{
			"id":"8",
			"title":"Real State"
		},
		{
			"id":"9",
			"title":"Immigration"
		},
		{
			"id":"10",
			"title":"Wills, Trust, and State"
		},
		{
			"id":"11",
			"title":"Goverment"
		},
		{
			"id":"12",
			"title":"Intellectual Property"
		}
	];

	$scope.zip_areas = [{
		"zip_code":"00000",
		"place":"Nowheresvill, XX",
		"products": []

		},
		{
		"zip_code":"60450",
		"place":"Morris, IL",
		"products": $scope.morris_place

		}
	];

	$scope.selectPlace = function()
	{
		
		for(var i=0; i < $scope.zip_areas.length; i++)
		{
			if($scope.zip_areas[i].zip_code === $scope.zip_code)
			{
				$scope.show_text = true;
				$scope.zip_name = $scope.zip_areas[i].place+" "+$scope.zip_code	;
				$scope.legal_services = $scope.zip_areas[i].products;
				
				break;
			}
			else
			{
				$scope.show_text = false;
				$scope.legal_services.length = 0;
				$scope.zip_name = "";
			}
			//console.log("zip", $scope.zip_areas[i]);
		}

	}

	$scope.getPlace = function()
	{
		$scope.show_text = false;
		
		//var div_category = document.getElementById("select_box_image");
		//div_category.style.backgroundImage="url(img/category_bg.png)";
		//console.log("cat div",div_category.style);
		

	}

	$scope.showReviews = function(user_info)
	{
		
		console.log("user info",user_info);
		$scope.user = {
			"img":user_info.image_url,
			"full_name":user_info.full_name,
			"address":user_info.address
		};

		$scope.category_show = false;
		$scope.reviews_show = true;
		modal.style.display = "block";		

	}



	$scope.onSelectChange = function()
	{

		for(var i=0; i < $scope.morris_place.length; i++)
		{
			if($scope.morris_place[i].id == $scope.category_value)
			{
				$scope.category_title = $scope.morris_place[i].title;
				$scope.show_text = false;
				$scope.category_show = true;
				$scope.reviews_show = false;
				modal.style.display = "block";		
				break;
			}
			
		}

		

	}

	// Get the modal
	var modal = document.getElementById('myModal');

	// Get the <span> element that closes the modal
	var span = document.getElementById("close1");
	var span2 = document.getElementById("close2");


	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
	  modal.style.display = "none";
	}

	span2.onclick = function() {
	  modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	  if (event.target == modal) {
	    modal.style.display = "none";
	  }
	}

	$scope.close_modal_div = function()
	{
		modal.style.display = "none";	
		
	}
});