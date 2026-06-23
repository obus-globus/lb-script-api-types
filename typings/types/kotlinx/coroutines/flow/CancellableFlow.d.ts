import type { Object } from '../../../java/lang/Object.d.ts'
import type { Flow } from '../../../kotlinx/coroutines/flow/Flow.d.ts'
export interface CancellableFlow<T extends unknown> extends Object, Flow<T>{
}