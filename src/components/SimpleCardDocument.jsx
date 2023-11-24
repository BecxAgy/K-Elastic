import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Badge,
    Chip,
} from '@material-tailwind/react'
const SimpleCardDocument = ({ doc, colspan }) => {
    return (
        <Card
            className={`mt-6 bg-blue-gray-200/5shadow-md hover:shadow-xl col-span-${colspan} `}
        >
            <div className='flex grid-col-2 gap-4 pt-4 pl-5'>
                <Chip
                    className=''
                    value='Similar'
                    color='purple'
                    variant='ghost'
                />
                <Chip
                    className='text-black'
                    value='Similar'
                    color='orange'
                    variant='ghost'
                />
            </div>

            <CardBody>
                <Typography variant='h5' color='blue-gray' className='mb-2'>
                    {}
                </Typography>
                <Typography>
                    Because it&apos;s about motivating the doers. Because
                    I&apos;m here to follow my dreams and inspire others.
                </Typography>
            </CardBody>
            <CardFooter className='pt-0'>
                <a
                    href='#'
                    className='inline-block text-cyan-400 hover:font-bold'
                >
                    Copy path
                </a>
            </CardFooter>
        </Card>
    )
}
export default SimpleCardDocument
