import React from 'react'
import CourseTable from './CourseTable'
import SearchBar from './SearchBar'

class ClassContainer extends React.Component {

	constructor() {
		super()

		this.state = {
			courses: [],
			searchTerm: ""
		}
	}

	componentDidMount() {
		fetch("https://murmuring-cliffs-39770.herokuapp.com/courses")
			.then(res => res.json())
			.then(json => this.setState({
				courses: json
			}))
	}

	// filter function 
	// 

	searchFilter = (e) => {




		e.preventDefault()
		let newCourseList = []
		this.state.courses.map((course) => {
			if (course.name.toLowerCase().includes(e.target.value.toLowerCase()) || course.instructor.toLowerCase().includes(e.target.value.toLowerCase()) || course.semester.toLowerCase().includes(e.target.value.toLowerCase())) {
 				newCourseList.push(course)
 			}
				}
		)
		this.setState({
			courses: newCourseList
		})
	}


	render() {

		return(
			<div>
			<SearchBar handleChange={this.searchFilter}/>
			 {this.state.courses.map((course, idx) => {
			 	return <CourseTable course={course} key={idx}/>
			 })}
			</div>
		)
	}
}

export default ClassContainer