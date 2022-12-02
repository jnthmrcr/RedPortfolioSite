import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './style.css'
import { Section } from './Section'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
		<header>
			<h1>J A Mercer</h1>
			<p>email address</p>
		</header>
		<main>
			<Section/>
			<Section/>
			<Section/>
		</main>
	</div>
  )
}

export default App
