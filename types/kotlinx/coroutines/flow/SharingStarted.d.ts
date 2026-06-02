import type { Object } from '../../../java/lang/Object.d.ts'
import type { Flow } from '../../../kotlinx/coroutines/flow/Flow.d.ts'
import type { SharingCommand } from '../../../kotlinx/coroutines/flow/SharingCommand.d.ts'
import type { StateFlow } from '../../../kotlinx/coroutines/flow/StateFlow.d.ts'
export interface SharingStarted extends Object{
    command(subscriptionCount: StateFlow<number>): Flow<SharingCommand>;
}