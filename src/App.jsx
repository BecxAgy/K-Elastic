import './App.css'
import Sidebar from './components/Sidebar'
import MyRoutes from './routes/routes'

function App() {
    return (
        <div className=''>
            <div className='flex relative '>
                <div className='mr-12'>
                    <Sidebar />
                </div>

                <div className='ml-12 p-9'>
                    <MyRoutes />
                </div>
            </div>
        </div>
    )
}

export default App
