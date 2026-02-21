import React from 'react'
import { Link } from 'react-router-dom'

interface Appointment {
    patient: string
    doctor: string
    time: string
    status: string
}

const statusClasses: Record<string, string> = {
    Завершена: 'bg-green-100 text-green-800',
    'В процессе': 'bg-cyan-100 text-cyan-800',
    Ожидается: 'bg-yellow-100 text-yellow-800',
    Отменена: 'bg-red-100 text-red-800',
}

const AppointmentsTable: React.FC = () => {

    const appointments: Appointment[] = [
        { patient: 'Махдиев Асадула', doctor: 'Магомедов У.', time: 'Сегодня 11:45', status: 'Завершена' },
        { patient: 'Абдусаламов Рустам', doctor: 'Ахмедов Р.', time: 'Сегодня 12:00', status: 'В процессе' },
        { patient: 'Хабилов Рустам', doctor: 'Курбанов М.', time: 'Сегодня 12:30', status: 'Ожидается' },
        { patient: 'Магомедов Абдул', doctor: 'Магомедов У.', time: 'Сегодня 12:30', status: 'Отменена' },
        { patient: 'Хусейнов Яхья', doctor: 'Мирзамагомедов Р.', time: 'Сегодня 13:00', status: 'Ожидается' },
    ]

    return (
        <div className="rounded-xl overflow-hidden border w-[70%] mt-4">
            <div className="flex justify-between items-center px-4 py-3 bg-4">
                <h2 className="text-lg font-medium">Ближайшие записи</h2>
                <Link
                    to="/visits"
                    className="text-blue-500 cursor-pointer">
                    посмотреть все
                </Link>
            </div>
            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-1">
                        <th className="px-4 py-3 text-left">Пациент</th>
                        <th className="px-4 py-3 text-left">Врач</th>
                        <th className="px-4 py-3 text-left">Время</th>
                        <th className="px-4 py-3 text-left">Статус</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map((appt, idx) => (
                        <tr key={idx} className="border-t border-neutral-500 bg-4">
                            <td className="px-4 py-3">{appt.patient}</td>
                            <td className="px-4 py-3">{appt.doctor}</td>
                            <td className="px-4 py-3">{appt.time}</td>
                            <td className="px-4 py-3">
                                <span className={`px-2 py-1 rounded ${statusClasses[appt.status]}`}>
                                    {appt.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default AppointmentsTable
