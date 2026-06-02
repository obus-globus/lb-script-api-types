import type { Runnable } from '../../../java/lang/Runnable.d.ts'
import type { Thread } from '../../../java/lang/Thread.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class ThreadDeathWatcher$Entry extends Object {
    constructor(arg0: Thread, arg1: () => void, arg2: boolean)
    // private isWatch: boolean;
    // private task: () => void;
    // private thread: Thread;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
}