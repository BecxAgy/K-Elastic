import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
    IconButton,
} from '@material-tailwind/react'
import { LuFileText, LuFlame, LuSettings, LuTag } from 'react-icons/lu'
import { SiCodenewbie } from 'react-icons/si'

function Sidebar() {
    return (
        <div className=''>
            <div className='flex justify-center   '>
                <Card className='h-screen w-[6rem] p-4 shadow-2xl rounded-r-3xl'>
                    <div className='pl-3 mb-2 p-5'>
                        <IconButton className='rounded-full'>
                            <SiCodenewbie className='w-5 h-5 text-cyan-600' />
                        </IconButton>
                    </div>
                    <hr className='my-3  ' />
                    <List>
                        <ListItem className='w-[3rem] mb-8'>
                            <ListItemPrefix>
                                <LuFileText className='h-5 w-5 hover:text-cyan-600' />
                            </ListItemPrefix>
                        </ListItem>
                        <ListItem className='w-[3rem] mb-8 '>
                            <ListItemPrefix>
                                <LuFlame className='h-5 w-5 hover:text-cyan-600' />
                            </ListItemPrefix>
                        </ListItem>
                        <ListItem className='w-[3rem] mb-8'>
                            <ListItemPrefix>
                                <LuTag className='h-5 w-5 hover:text-cyan-600' />
                            </ListItemPrefix>
                        </ListItem>
                    </List>
                    <List className='mt-auto'>
                        <ListItem className='w-[3rem]'>
                            <ListItemPrefix>
                                <LuSettings className='h-5 w-5 hover:text-cyan-600' />
                            </ListItemPrefix>
                        </ListItem>
                    </List>
                </Card>
            </div>
        </div>
    )
}
export default Sidebar
