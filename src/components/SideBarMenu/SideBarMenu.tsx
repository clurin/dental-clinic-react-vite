import Buttons from './Buttons'

const SideBarMenu = () => {
    return (
        <div className='w-72 flex flex-col px-2 bg-5 items-center gap-6 pt-9  top-0 left-0 h-screen'>
            <p className='text-2xl bg-4 px-6 py-3 rounded-xl '>Администратор</p>
            <Buttons />
        </div>
    )
}

export default SideBarMenu