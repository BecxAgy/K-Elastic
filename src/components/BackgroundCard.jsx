import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from '@material-tailwind/react'

export function BackgroundCard() {
    return (
        <Card
            shadow={false}
            className='relative grid  w-full  items-end justify-center overflow-hidden text-center row-span-2'
        >
            <CardHeader
                floated={false}
                shadow={false}
                color='transparent'
                className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://cdn.dribbble.com/users/5031/screenshots/2105106/snp-3_still.gif?resize=400x0')] bg-cover bg-center"
            >
                <div className='to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50' />
            </CardHeader>
            <CardBody className='relative py-14 px-6 md:px-12'>
                <Typography
                    variant='h2'
                    color='white'
                    className='mb-6 font-medium leading-[1.5]'
                >
                    Título do Documento
                </Typography>
                <Typography variant='h5' className='mb-4 text-gray-400'>
                    generic gereneric neric neric generic
                </Typography>
                <Button>Copy path</Button>
            </CardBody>
        </Card>
    )
}
