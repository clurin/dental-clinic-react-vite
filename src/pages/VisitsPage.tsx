import { useGetVisitsQuery } from "../app/visitApi"
import VisitsTable from "../components/VisitsPage/VisitsTable"

const VisitsPage = () => {
    const { data: visits, isLoading, isError } = useGetVisitsQuery()
    console.log(visits)
    return (
        <div>
            <VisitsTable visits={visits} isLoading={isLoading} isError={isError} />
        </div>
    )
}

export default VisitsPage