a=["mango","apple","banana","orange"];
c=[5,7,4,2];
 b=[{
		id:1,
		name:"pen",
		price:10,
		},
		
		{
		id:2,
		name:"pen",
		price:30,
		},
		
		{
		id:3,
		name:"pen",
		price:25,
		},
		
		{
		id:4,
		name:"pencil",
		price:2,
		},
		
		{
		id:5,
		name:"pencil",
		price:5,
		}
	];

/*for Each method */
document.write("c=[5,7,4,2]"+"<br>"+"Even number :"+"<br>");
	var output=c.forEach(function(e){
			if(e%2==0){
				document.write(e);
				document.write("<br>"+"<br>")
			}
				})
				
/*Filter method*/

	var output =b.filter(function(e){
				return e.name=="pen"; 
				})
				console.log(output);
				
	var output =b.filter(function(e){
				return e.price=100;
				})
				console.log(output);
				
/*Map method*/
document.write("<br>"+"Map Method :"+"<br>"+"<br>");
	var output=a.map(function(e){
		return e.toUpperCase ();
		})
			document.write(output);
			
			
		
		
				
				
				
		
				