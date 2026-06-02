import type { Thread } from '../../../java/lang/Thread.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Function0 } from '../../../kotlin/jvm/functions/Function0.d.ts'
export class ParkingDelegator extends Object {
    static INSTANCE: ParkingDelegator;
    createRef(): Thread;
    destroyRef(ref: Thread): void;
    timedWait(ref: Thread, nanos: number, shouldWait: Function0<boolean>): void;
    wait(ref: Thread, shouldWait: Function0<boolean>): void;
    wake(ref: Thread): void;
}