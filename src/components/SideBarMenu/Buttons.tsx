import React from 'react'
import {
    BookOutlined,
    BookFilled,
    DollarCircleOutlined,
    DollarCircleFilled,
    EyeOutlined,
    EyeFilled,
    ThunderboltOutlined,
    ThunderboltFilled,
    TeamOutlined,
    OrderedListOutlined,
    UnorderedListOutlined,
} from '@ant-design/icons'
import { useLocation, useNavigate } from 'react-router-dom'

const items = [
    {
        key: 'overview',
        outline: <EyeOutlined className="text-2xl" />,
        filled: <EyeFilled className="text-2xl" />,
        label: 'Обзор',
    },
    {
        key: 'patients',
        outline: <BookOutlined className="text-2xl" />,
        filled: <BookFilled className="text-2xl" />,
        label: 'Список пациентов',
    },
    {
        key: 'services',
        outline: <ThunderboltOutlined className="text-2xl" />,
        filled: <ThunderboltFilled className="text-2xl" />,
        label: 'Услуги',
    },
    {
        key: 'payments',
        outline: <DollarCircleOutlined className="text-2xl" />,
        filled: <DollarCircleFilled className="text-2xl" />,
        label: 'Платежи',
    },
    {
        key: 'staff',
        outline: <TeamOutlined className="text-2xl" />,
        filled: <TeamOutlined className="text-2xl" />,
        label: 'Персонал',
    },
    {
        key: 'visits',
        outline: <OrderedListOutlined className="text-2xl" />,
        filled: <UnorderedListOutlined className="text-2xl" />,
        label: 'Записи',
    },
]

const Buttons: React.FC = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const selectedKey = location.pathname.replace('/', '') || 'overview'

    return (
        <div className="w-full bg-(--color-2) rounded-lg p-2 font-mono">
            {items.map((item) => {
                const isActive = selectedKey === item.key

                return (
                    <div
                        key={item.key}
                        onClick={() => navigate(`/${item.key}`)}
                        className={`flex items-center gap-3 p-3 rounded cursor-pointer text-lg
              ${isActive ? 'bg-(--color-3) text-black' : 'hover:bg-blue-200'}`}
                    >
                        {isActive ? item.outline : item.filled}
                        <span>{item.label}</span>
                    </div>
                )
            })}
        </div>
    )
}

export default Buttons
