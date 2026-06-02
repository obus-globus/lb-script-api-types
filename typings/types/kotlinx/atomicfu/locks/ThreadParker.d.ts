import type { Thread } from '../../../java/lang/Thread.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../kotlin/jvm/functions/Function1.d.ts'
import type { AtomicRef } from '../../../kotlinx/atomicfu/AtomicRef.d.ts'
import type { ParkingDelegator } from '../../../kotlinx/atomicfu/locks/ParkingDelegator.d.ts'
import type { ParkingState } from '../../../kotlinx/atomicfu/locks/ParkingState.d.ts'
export class ThreadParker extends Object {
    constructor()
    // private delegator: ParkingDelegator;
    // private state: AtomicRef<ParkingState>;
    park(): void;
    parkNanos(nanos: number): void;
    // private parkWith(invokeWait: Function1<Thread, void>): void;
    unpark(): void;
}