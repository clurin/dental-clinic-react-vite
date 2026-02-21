import { useGetVisitsQuery } from "../app/visitApi"

const VisitsPage = () => {
    const { data: visits, isLoading, isError } = useGetVisitsQuery()
    console.log(visits)
    return (
        <div>VisitsPage</div>
    )
}

export default VisitsPage