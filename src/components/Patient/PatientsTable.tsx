import { useGetPatientsQuery } from '../../app/patientApi'
import { formatPhone } from '../../features/formatPhone'
import { formatDate } from '../../features/formatDate'

const PatientsTable = () => {
    const { data: patients = [], isLoading, isFetching, isError } = useGetPatientsQuery()

    if (isLoading) return <div className="mt-4 rounded-xl border bg-4 p-4">Загрузка персонала...</div>
    if (isError) return <div className="mt-4 rounded-xl border bg-4 p-4 text-red-700">Не удалось загрузить персонал.</div>

    return (
        <>
            <div className="mt-4 w-full overflow-hidden rounded-xl border">
                <div className="flex items-center justify-between bg-4 px-4 py-3">
                    <div className='flex items-center gap-12'>
                        <h2 className="text-lg font-medium">Персонал</h2>
                        <p className="text-sm text-neutral-500">
                            Количество пациентов: {isFetching ? 'Обновление...' : `${patients.length}`}
                        </p>
                    </div>
                    <button onClick={() => { }}
                        className="text-blue-500 cursor-pointer">
                        добавить сотрудника
                    </button>
                </div>
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-1">
                            <th className="px-4 py-3 text-left">Имя</th>
                            <th className="px-4 py-3 text-left">Фамилия</th>
                            <th className="px-4 py-3 text-left">Телефон</th>
                            <th className="px-4 py-3 text-left">Добавлен</th>
                        </tr>
                    </thead>
                    <tbody>
                        {patients.map((patient) => (
                            <tr key={patient.id} className="border-t border-neutral-300 bg-4">
                                <td className="px-4 py-3">{patient.first_name}</td>
                                <td className="px-4 py-3">{patient.last_name}</td>
                                <td className="px-4 py-3">{formatPhone(patient.phone)}</td>
                                <td className="px-4 py-3">{formatDate(patient.created_at, { withTime: false })}</td>
                            </tr>
                        ))}
                        {patients.length === 0 && (
                            <tr className="border-t border-neutral-300 bg-4">
                                <td className="px-4 py-6 text-center text-neutral-500" colSpan={6}>
                                    Сотрудники пока не добавлены.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default PatientsTable