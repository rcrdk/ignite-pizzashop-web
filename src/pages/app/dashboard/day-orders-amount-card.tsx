import { useQuery } from '@tanstack/react-query'
import { Utensils } from 'lucide-react'

import { getDayOrdersAmount } from '@/api/get-day-orders-amount'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { MetricCardSkeleton } from './metric-card-skeleton'

export function DayOrdersAmountCard() {
	const { data: dayOrdersAmount } = useQuery({
		queryKey: ['metric', 'day-orders-amount'],
		queryFn: getDayOrdersAmount,
	})

	return (
		<Card>
			<CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
				<CardTitle className="text-base font-semibold">Pedidos (dia)</CardTitle>
				<Utensils className="h-4 w-4 text-muted-foreground" />
			</CardHeader>

			<CardContent className="space-y-1">
				{dayOrdersAmount ? (
					<>
						<span className="text-2xl font-bold tracking-tight">
							{dayOrdersAmount.amount.toLocaleString('pt-BR')}
						</span>

						{dayOrdersAmount.diffFromYesterday > 0 && (
							<p className="text-xs text-muted-foreground">
								<span className="text-emerald-500 dark:text-emerald-400">
									+{dayOrdersAmount.diffFromYesterday}%
								</span>{' '}
								em relação a ontem
							</p>
						)}

						{dayOrdersAmount.diffFromYesterday < 0 && (
							<p className="text-xs text-muted-foreground">
								<span className="text-rose-500 dark:text-rose-400">
									{dayOrdersAmount.diffFromYesterday}%
								</span>{' '}
								em relação a ontem
							</p>
						)}

						{dayOrdersAmount.diffFromYesterday === 0 && (
							<p className="text-xs text-muted-foreground">
								<span className=" text-gray-500 dark:text-gray-400">
									{dayOrdersAmount.diffFromYesterday}%
								</span>{' '}
								em relação a ontem
							</p>
						)}
					</>
				) : (
					<MetricCardSkeleton />
				)}
			</CardContent>
		</Card>
	)
}
