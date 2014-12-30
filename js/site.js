
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