import type { Object } from '../../../java/lang/Object.d.ts'
import type { Flow } from '../../../kotlinx/coroutines/flow/Flow.d.ts'
import type { SharingCommand } from '../../../kotlinx/coroutines/flow/SharingCommand.d.ts'
import type { SharingStarted } from '../../../kotlinx/coroutines/flow/SharingStarted.d.ts'
import type { SharingStarted$Companion } from '../../../kotlinx/coroutines/flow/SharingStarted$Companion.d.ts'
import type { StateFlow } from '../../../kotlinx/coroutines/flow/StateFlow.d.ts'
export class StartedWhileSubscribed extends Object implements SharingStarted {
    static Companion: SharingStarted$Companion;
    constructor(stopTimeout: number, replayExpiration: number)
    // private replayExpiration: number;
    // private stopTimeout: number;
    command(subscriptionCount: StateFlow<number>): Flow<SharingCommand>;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}