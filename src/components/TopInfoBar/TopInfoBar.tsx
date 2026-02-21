import { useMemo } from 'react'
import ExitButton from '../Buttons/ExitButton'

const pageNameMap: Record<string, string> = {
  overview: 'Обзор',
  patients: 'Пациенты',
  services: 'Услуги',
  payments: 'Платежи',
  staff: 'Персонал',
  visits: 'Записи'
}

type Props = {
  name: string
}

const TopInfoBar = ({ name }: Props) => {
  const pageName = pageNameMap[name] ?? 'Панель'

  const date = useMemo(
    () =>
      new Date().toLocaleDateString('ru-RU', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      }),
    [],
  )

  return (
    <div className="flex h-18 w-312 items-center justify-between bg-neutral-100 px-9 py-4">
      <p className="text-3xl text-neutral-600">{pageName}</p>
      <p className="text-xl text-neutral-700">{date}</p>
      <div className="flex flex-row items-center gap-9">
        <p className="rounded-lg bg-2 p-2 text-xl text-neutral-900">Магомедов Магомед</p>
        <ExitButton />
      </div>
    </div>
  )
}

export default TopInfoBar
