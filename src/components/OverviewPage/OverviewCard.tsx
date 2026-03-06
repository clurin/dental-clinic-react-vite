import { VerticalAlignTopOutlined } from '@ant-design/icons'
import DemoPie from './DemoPie'
import { useGetPatientsQuery } from '../../app/patientApi'
import { useGetUsersQuery } from '../../app/userApi'
import { useGetVisitsQuery } from '../../app/visitApi'

const OverviewCard = () => {
    const patientsCount = useGetPatientsQuery().data?.length
    const doctors = useGetUsersQuery().data?.filter(user => user.role === 'doctor')
    const visitsForDoctor = useGetVisitsQuery().data
    // ?.filter(visit => doctors?.some(doctor => doctor.id === visit.doctor_id))
    console.log('visitsForDoctor', visitsForDoctor)
    const data = [
        { name: 'Ахмедов Р', value: 7 },
        { name: 'Магомедов У', value: 4 },
        { name: 'Курбанов М', value: 7 },
        { name: 'Мирзамагомедов Р', value: 5 },
    ]
    return (
        <div>
            <div className="flex flex-row gap-4 overflow-x-hidden">
                <div className="bg-4 pr-10 rounded-xl border">
                    <p className="pt-6 pl-6 text-2xl">Количество пациентов</p>
                    <div className="pt-10 pl-6">
                        <p className="text-6xl">{patientsCount}</p>
                        <div className="text-success-main flex flex-row gap-2 items-center py-3">
                            <VerticalAlignTopOutlined className="scale-150" />
                            <p className="text-md font-bold ">+12 пациентов в этом месяце</p>
                        </div>
                    </div>
                </div>
                <div className="bg-4 pr-6 rounded-xl border">
                    <p className="pt-6 pl-6 text-2xl">Количество записей на сегодня</p>
                    <div className="pt-10 pl-6">
                        <p className="text-6xl">27</p>
                        <div className="flex flex-row gap-6 py-3">
                            <p className="text-md text-success-main font-bold">В ожидании: 4</p>
                            <p className="text-md text-wait-main font-bold">Завершено: 17</p>
                            <p className="text-md text-quit-main font-bold">Отменено: 2</p>
                        </div>
                    </div>
                </div>
                <div className="bg-4 rounded-xl w-84 border">
                    <p className="text-2xl pt-6 pl-6">Записи врачей</p>
                    <div className="flex flex-row overflow-x-hidden overflow-y-hidden">
                        <DemoPie data={data} />
                        <div className='text-md py-4 px-4'>
                            <p className="text-wait-main">Ахмедов Р: 7</p>
                            <p className="text-quit-main ">Магомедов У: 4</p>
                            <p className="text-success-main ">Курбанов М: 7</p>
                            <p className="text-process-main">Мирзамагом. Р: 5</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OverviewCard