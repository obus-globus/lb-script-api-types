import type { Object } from '../../../java/lang/Object.d.ts'
import type { Waiter } from '../../../kotlinx/coroutines/Waiter.d.ts'
import type { SelectInstance } from '../../../kotlinx/coroutines/selects/SelectInstance.d.ts'
export interface SelectInstanceInternal<R extends Object | number | string | boolean> extends Object, Waiter, SelectInstance<R>{
}