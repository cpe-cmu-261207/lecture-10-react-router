import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

type Params = {
	id: string
}

type TaskType = {
	id: number;
	userId: number;
	title: string;
	completed: boolean;
}

const Task = () => {
	const { id } = useParams<Params>()
	const [task, setTask] = useState<TaskType | null>(null);
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)

	//fetch with async await
	const fetchApi = async () => {
		try {
			const resp =
				await axios.get<TaskType>(`https://jsonplaceholder.typicode.com/todos/${id}`)
			setTask(resp.data)
			setLoading(false)
		}
		catch (err) {
			setLoading(false)
			setError(true)
		}
	}

	useEffect(() => {
		//fetch with promise
		axios.get<TaskType>(`https://jsonplaceholder.typicode.com/todos/${id}`)
			.then(resp => {
				setTask(resp.data)
				setLoading(false)
			})
			.catch(err => {
				setLoading(false)
				setError(true)
			})

		// fetchApi()
	}, [])

	const render = () => {
		if (loading)
			return <p>Loading ...</p>
		else if (error)
			return <p>There was some error !</p>
		else
			return (
				<div style={{ backgroundColor: 'yellow' }}>
					<p>userId: {task?.userId}</p>
					<p>id: {task?.id}</p>
					<p>title: {task?.title}</p>
					<p>completed: {task?.completed.toString()}</p>
				</div>
			)
	}

	return (
		<div>
			Viewing task id = {id}
			{render()}
		</div>
	)
}

export default Task