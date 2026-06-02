import type { Object } from '../../../java/lang/Object.d.ts'
import type { SharingStarted } from '../../../kotlinx/coroutines/flow/SharingStarted.d.ts'
export class SharingStarted$Companion extends Object {
    // private Eagerly: SharingStarted;
    /*not mapped: */ getEagerly(): SharingStarted;
    // private Lazily: SharingStarted;
    /*not mapped: */ getLazily(): SharingStarted;
    WhileSubscribed(stopTimeoutMillis: number, replayExpirationMillis: number): SharingStarted;
}