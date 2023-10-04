import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
    Badge,
    Chip,
} from '@material-tailwind/react'
function CardDocument({ documentTitle = 'Título do Documento' }) {
    return (
        <Card className='mt-6 w-96 shadow-none'>
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
                    {documentTitle}
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
export default CardDocument
