import React, { useState, useEffect} from "react";
import { Card } from "./card";
import { svgs } from "./svgs";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [course, setCourse] = useState([])
	
	const courses = async() => {
		const data = await fetch("https://breathecode.herokuapp.com/v1/marketing/course")
		const response = await data.json()
		setCourse(response)
		// console.log(response);
	}
	console.log(course);
	
	useEffect(() => {
		courses()		
	}, [])
	
	return (
		<div className="container">
			<div>
				<span>
					Continue learning for free about:
				</span>
			</div>
			{}
			<Card title={"A.I & Machine learning"} text={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo."} icon={svgs.machineLearning}/>
			<Card title={"Data science"} text={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo."} icon={svgs.dataScience}/>
		</div>
	);
};

export default Home;
