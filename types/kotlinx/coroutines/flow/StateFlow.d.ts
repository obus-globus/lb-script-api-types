import type { Object } from '../../../java/lang/Object.d.ts'
import type { SharedFlow } from '../../../kotlinx/coroutines/flow/SharedFlow.d.ts'
export interface StateFlow<T extends Object | number | string | boolean> extends Object, SharedFlow<T>{
    readonly value: T;
}