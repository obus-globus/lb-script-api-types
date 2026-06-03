import type { Thread } from '../../../java/lang/Thread.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ParkingDelegator extends Object {
    static INSTANCE: ParkingDelegator;
    createRef(): Thread;
    destroyRef(ref: Thread): void;
    timedWait(ref: Thread, nanos: number, shouldWait: () => boolean): void;
    wait(ref: Thread, shouldWait: () => boolean): void;
    wake(ref: Thread): void;
}