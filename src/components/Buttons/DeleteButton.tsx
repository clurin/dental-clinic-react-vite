import { DeleteFilled } from '@ant-design/icons'

const DeleteButton = () => {
    return (
        <button className="relative inline-flex items-center p-2 text-white text-lg font-medium rounded-lg overflow-hidden group">
            <span className="absolute inset-0 bg-linear-to-br from-[#ff0000] to-[#a71414] transition-all duration-300 group-hover:opacity-50 rounded-lg"></span>
            <span className="relative flex items-center justify-center">
                <DeleteFilled />
            </span>
        </button>
    )
}

export default DeleteButton