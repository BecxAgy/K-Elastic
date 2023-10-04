import './App.css'
import Sidebar from './components/Sidebar'
import MyRoutes from './routes/routes'

function App() {
    return (
        <div className='flex relative bg-blue-gray-200/10'>
            <Sidebar />
            <div className='p-9'>
                <MyRoutes />
            </div>
        </div>
    )
}

export default App
