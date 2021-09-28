import { useContext } from 'react'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import { CheckCircle, Users, FileText, BookOpen } from 'react-feather'
import { filterByStatusTickets } from '../../../../utility/Utils'

export const dataInfoChart = (tickets, reporteros) => {
  const { colors } = useContext(ThemeColors)

  return [
    {
      icon: <FileText size={21} />,
      color: 'danger',
      colorHEX: colors.danger.main,
      quantity: tickets?.length || 0,
      title: 'Total de Casos',
    },
    {
      icon: <BookOpen size={21} />,
      color: 'warning',
      colorHEX: colors.warning.main,
      quantity: filterByStatusTickets(tickets, 2).length || 0,
      title: 'Casos Abiertos',
    },
    {
      icon: <CheckCircle size={21} />,
      color: 'secondary',
      colorHEX: colors.secondary.main,
      quantity: 0,
      title: 'Casos Finalizados',
    },
    {
      icon: <Users size={21} />,
      color: 'primary',
      colorHEX: colors.primary.main,
      quantity: reporteros || 0,
      title: 'Reporteros Activos',
    },
  ]
}
