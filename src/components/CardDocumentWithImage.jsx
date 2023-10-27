import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Chip,
} from '@material-tailwind/react'

export function CardDocumentWithImage() {
    return (
        <Card className='h-72'>
            <CardHeader floated={false} className=''>
                <img
                    src='https://starwalk.space/gallery/images/milky-way-faq/1920x1080.jpg'
                    className='bg-cover'
                    alt='profile-picture'
                />
            </CardHeader>
            <CardBody className='text-center'>
                <Typography variant='h5' color='blue-gray' className='mb-2'>
                    Título do Documento
                </Typography>
            </CardBody>
            <CardFooter className='flex justify-center gap-7 pt-2'>
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
                <Chip
                    className='text-black'
                    value='Similar'
                    color='green'
                    variant='ghost'
                />
            </CardFooter>
        </Card>
    )
}
