type FormatDateOptions = {
    withTime?: boolean
}

export const formatDate = (
    date: string, { withTime = true }: FormatDateOptions = {}
) => {
    return new Intl.DateTimeFormat('ru-RU', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        ...(withTime && {
            hour: '2-digit',
            minute: '2-digit',
        }),
    }).format(new Date(date))
}