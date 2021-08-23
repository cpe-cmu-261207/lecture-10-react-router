import { useEffect } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Task from './Task'

const Tasks = () => {

	useEffect(() => {
		console.log('tasks is rendered')
	}, [])

	return (
		<div>
			<p>Tasks page</p>
			<Switch>
				<Route exact path='/tasks/'>
					<ul className='list-disc ml-6'>
						<li>
							<Link className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600' to={'/tasks/1'}>View task id 1</Link>
						</li>
						<li>
							<Link className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600' to={'/tasks/2'}>View task id 2</Link>
						</li>
						<li>
							<Link className='underline text-blue-600 hover:text-blue-800 visited:text-purple-600' to={'/tasks/500'}>View task id 500</Link>
						</li>
					</ul>
				</Route>

				<Route path='/tasks/:id'>
					<Task />
				</Route>
			</Switch>
		</div>
	)
}

export default Tasks