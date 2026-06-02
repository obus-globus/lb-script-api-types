import type { AtomicLong } from '../../java/util/concurrent/atomic/AtomicLong.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Clock } from '../../kotlin/time/Clock.d.ts'
import type { Uuid } from '../../kotlin/uuid/Uuid.d.ts'
export class UuidV7Generator extends Object {
    static INSTANCE: UuidV7Generator;
    // private OVERFLOW_MASK: number;
    // private TIMESTAMP_BIAS_BITS: number;
    // private VERSION_MASK: number;
    // private timestampAndCounter: AtomicLong;
    generate(clock: Clock): Uuid;
}