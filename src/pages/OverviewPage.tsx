import AppointmentsTable from "../components/OverviewPage/AppointmentsTable"
import OverviewCard from "../components/OverviewPage/OverviewCard"

const OverviewPage = () => {
    return (
        <div className="flex flex-col h-full w-full">
            <OverviewCard />
            <AppointmentsTable />
        </div>
    )
}

export default OverviewPage