import type { ThreadProperties } from '../../../../io/netty/util/concurrent/ThreadProperties.d.ts'
import type { StackTraceElement } from '../../../../java/lang/StackTraceElement.d.ts'
import type { Thread } from '../../../../java/lang/Thread.d.ts'
import type { Thread$State } from '../../../../java/lang/Thread$State.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SingleThreadEventExecutor$DefaultThreadProperties extends Object implements ThreadProperties {
    constructor(arg0: Thread)
    // private t: Thread;
    id(): number;
    isAlive(): boolean;
    isDaemon(): boolean;
    isInterrupted(): boolean;
    name(): string;
    priority(): number;
    stackTrace(): StackTraceElement[];
    state(): Thread$State;
}