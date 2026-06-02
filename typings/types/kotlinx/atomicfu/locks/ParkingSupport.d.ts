import type { Thread } from '../../../java/lang/Thread.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Duration } from '../../../kotlin/time/Duration.d.ts'
import type { TimeMark } from '../../../kotlin/time/TimeMark.d.ts'
export class ParkingSupport extends Object {
    static INSTANCE: ParkingSupport;
    currentThreadHandle(): Thread;
    park(timeout: Duration): void;
    parkUntil(deadline: TimeMark): void;
    unpark(handle: Thread): void;
}