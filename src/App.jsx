import './App.css'
import Home from './pages/home'

const App = () => {
  return (
    <div>
      <div className="buttonGroup">
        <div className='prevEditBtn'>
          <button className='Btn'>Preview</button>
          <button className='Btn'>Edit</button>
        </div>
        <div><button className='Btn'>PDF</button></div>
      </div>
      <Home />
      <div className='printBtn'>
        <button className='Btn'>Print Invoice</button>
      </div>
    </div>
  )
}

export default App
