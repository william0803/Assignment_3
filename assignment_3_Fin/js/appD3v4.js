var dataset = [12, 11, 9, 7, 26, 9, 23, 3, 18, 13, 9, 19, 8, 19, 18, 16, 18, 14, 11, 22, 1, 14, 17, 22, 4];
      
console.log(dataset.length);

 var gridMax = Math.sqrt(dataset.length);

 var content1 = d3.select("#graph1");
 var content2 = d3.select("#graph2");

 


// we use d3's enter/update/exit pattern to draw and bind our dom elements
var myCylinder = content1.selectAll("a-cylinder.cylinder")
               .data(dataset)
               .enter()
               .append("a-cylinder")
               .classed("cylinder", true);
// we set attributes on our cubes to determine how they are rendered

// we use d3's enter/update/exit pattern to draw and bind our dom elements
var mySphere = content2.selectAll("a-sphere.sphere")
               .data(dataset)
               .enter()
               .append("a-sphere")
               .classed("sphere", true);

//var x = -dataset.length/2;
 var x = 1;
 var y = 1;
 var z = 1;
 var m = 0;

//for the cylinder 

myCylinder.attr({
  position: function(d,i) {
       x=i % gridMax;
       z=Math.floor(i/gridMax);
       y=d/5;
       m ++;
       console.log("Count: " + m + " - " + "x: " + x + " y: " + y + " z: " + z);
       return x + " " + y + " " + z;
       },
   height: function(d){return d/2;},
   radius: function(d){return 0.5;},
   
   color: function(d){
     var letters = '0123456789ABCDEF'.split('');
     var color = '#';
     for (var i = 0; i < 6; i++) {
         color += letters[Math.floor(Math.random() * 15)];
     }
     return color;}
 });

 mySphere.attr({
  position: function(d,i) {
       x=i % gridMax;
       z=Math.floor(i/gridMax);
       y=(d/2)-0.5; //the radius of the spheres
       m ++;
       console.log("Count: " + m + " - " + "x: " + x + " y: " + y + " z: " + z);
       return x + " " + y + " " + z;
       },
   
   radius: function(d){return 0.45;},
   
   color: function(d){
     var letters = '0123456789ABCDEF'.split('');
     var color = '#';
     for (var i = 0; i < 6; i++) {
         color += letters[Math.floor(Math.random() * 15)];
     }
     return color;} 
    });