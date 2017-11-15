import React from 'react'

const CourseTable = (props) => {


	return(
		<div>
		<p>{props.course.id}</p>
		<p>{props.course.name}</p>
		<p>{props.course.instructor}</p>
		<p>{props.course.semester}</p>
		<br />
		</div>
	)

}

export default CourseTable