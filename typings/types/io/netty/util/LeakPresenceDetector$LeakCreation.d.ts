import type { LeakPresenceDetector$1 } from '../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Thread } from '../../../java/lang/Thread.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class LeakPresenceDetector$LeakCreation extends Throwable {
    private constructor()
    constructor(arg0: LeakPresenceDetector$1)
    message: string;
    readonly message: string | null;
    // private thread: Thread;
}