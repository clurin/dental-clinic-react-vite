import { EditFilled } from '@ant-design/icons'

const EditButton = () => {
    return (
        <button className="relative inline-flex items-center p-2 text-white text-lg font-medium rounded-lg overflow-hidden group">
            <span className="absolute inset-0 bg-linear-to-br from-[#26d0ff] to-[#14a760] transition-all duration-300 group-hover:opacity-50 rounded-lg"></span>
            <span className="relative flex items-center justify-center">
                <EditFilled />
            </span>
        </button>
    )
}

export default EditButton