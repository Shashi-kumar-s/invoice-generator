import './App.css'
import Home from './pages/home'
import Preview from './pages/preview'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <BrowserRouter>
      <div>
        <div className="buttonGroup">
          <div className='prevEditBtn'>
            <Link to={"/preview"} className='Btn'>Preview</Link>
            <Link to={"/"} className='Btn'>Edit</Link>
          </div>
          <div><button className='Btn'>PDF</button></div>
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/preview' element={<Preview />} />
        </Routes>
        <div className='printBtn'>
          <button className='Btn'>Print Invoice</button>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
