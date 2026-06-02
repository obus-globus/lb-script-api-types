import type { Thread } from '../../../java/lang/Thread.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { ParkingState } from '../../../kotlinx/atomicfu/locks/ParkingState.d.ts'
export class Parked extends Object implements ParkingState {
    constructor(data: Thread)
    readonly data: Thread;
}