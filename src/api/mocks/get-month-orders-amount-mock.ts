import { http, HttpResponse } from 'msw'

import { GetMonthOrdersAmountResponse } from '../get-month-orders-amount'

export const getMounthOrdersAmountMock = http.get<
  never,
  never,
  GetMonthOrdersAmountResponse
>('metrics/mounth-orders-amount', () => {
  return HttpResponse.json({
    amount: 200,
    diffFromLastMonth: 7,
  })
})
