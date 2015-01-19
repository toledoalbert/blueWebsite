
//Create skill bubbles with D3
var skills = d3.select("#skills").append("svg");

skills.append("circle").attr("class", "skillCircle").attr("stroke", "#FFF").attr("r", 80).attr("fill", "#fff").attr("cx", 200).attr("cy", 300);
skills.append("circle").attr("class", "skillCircle").attr("stroke", "#FFF").attr("r", 80).attr("fill", "#fff").attr("cx", 400).attr("cy", 400);
skills.append("circle").attr("class", "skillCircle").attr("stroke", "#FFF").attr("r", 80).attr("fill", "#fff").attr("cx", 600).attr("cy", 200);
skills.append("circle").attr("class", "skillCircle").attr("stroke", "#FFF").attr("r", 80).attr("fill", "#fff").attr("cx", 800).attr("cy", 700);
skills.append("circle").attr("class", "skillCircle").attr("stroke", "#FFF").attr("r", 50).attr("fill", "#fff").attr("cx", 800).attr("cy", 400);
skills.append("circle").attr("class", "skillCircle").attr("stroke", "#FFF").attr("r", 50).attr("fill", "#fff").attr("cx", 800).attr("cy", 200);
skills.append("circle").attr("class", "skillCircle").attr("stroke", "#FFF").attr("r", 50).attr("fill", "#fff").attr("cx", 1000).attr("cy", 400);
skills.append("circle").attr("class", "skillCircle").attr("stroke", "#FFF").attr("r", 80).attr("fill", "#fff").attr("cx", 1000).attr("cy", 600);
	

//Initialize skrollr
var s = skrollr.init();


// var t = new Trianglify({
//     x_gradient: Trianglify.colorbrewer.RdYlBu[5],
//     y_gradient: Trianglify.colorbrewer.RdYlBu[5],
//     noiseIntensity: 0.1,
//     cellpadding: 10,
//     cellsize: 100});

// var pattern = t.generate(document.body.clientWidth, document.body.clientHeight);
// document.getElementById("slide-1").setAttribute('style', 'background-image: '+ pattern.dataUrl);