import type { Object } from '../../../java/lang/Object.d.ts'
import type { MutableSharedFlow } from '../../../kotlinx/coroutines/flow/MutableSharedFlow.d.ts'
import type { StateFlow } from '../../../kotlinx/coroutines/flow/StateFlow.d.ts'
export interface MutableStateFlow<T extends Object | number | string | boolean> extends Object, MutableSharedFlow<T>, StateFlow<T>{
    value: T;
    compareAndSet(expect: T, update: T): boolean;
}