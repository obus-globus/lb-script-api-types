import type { Thread } from '../../../java/lang/Thread.d.ts'
import type { Throwable } from '../../../java/lang/Throwable.d.ts'
export class LeakPresenceDetector$LeakCreation extends Throwable {
    constructor(arg0: any)
    message: string;
    readonly message: string | null;
    // private thread: Thread;
}