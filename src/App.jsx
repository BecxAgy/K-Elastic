import './App.css'
import Sidebar from './components/Sidebar'
import MyRoutes from './routes/routes'

function App() {
    return (
        <div className='flex relative dark:bg-main-dark-bg'>
            <Sidebar />
            <div className='p-9'>
                <MyRoutes />
            </div>
        </div>
    )
}

export default App
