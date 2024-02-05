import { useQuery } from '@tanstack/react-query'
import { Utensils } from 'lucide-react'

import { getMonthOrdersAmount } from '@/api/get-month-orders-amount'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { MetricCardSkeleton } from './metric-card-skeleton'

export function MonthOrdersAmountCard() {
	const { data: monthOrdersAmount } = useQuery({
		queryKey: ['metric', 'month-orders-amount'],
		queryFn: getMonthOrdersAmount,
	})

	return (
		<Card>
			<CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
				<CardTitle className="text-base font-semibold">Pedidos (mês)</CardTitle>
				<Utensils className="h-4 w-4 text-muted-foreground" />
			</CardHeader>

			<CardContent className="space-y-1">
				{monthOrdersAmount ? (
					<>
						<span className="text-2xl font-bold tracking-tight">246</span>

						{monthOrdersAmount.diffFromLastMonth > 0 && (
							<p className="text-xs text-muted-foreground">
								<span className="text-emerald-500 dark:text-emerald-400">
									+{monthOrdersAmount.diffFromLastMonth}%
								</span>{' '}
								em relação ao mês passado
							</p>
						)}

						{monthOrdersAmount.diffFromLastMonth < 0 && (
							<p className="text-xs text-muted-foreground">
								<span className="text-rose-500 dark:text-rose-400">
									{monthOrdersAmount.diffFromLastMonth}%
								</span>{' '}
								em relação ao mês passado
							</p>
						)}

						{monthOrdersAmount.diffFromLastMonth === 0 && (
							<p className="text-xs text-muted-foreground">
								<span className="text-gray-500 dark:text-gray-400">
									{monthOrdersAmount.diffFromLastMonth}%
								</span>{' '}
								em relação ao mês passado
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
