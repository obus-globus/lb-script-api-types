import type { StackTraceElement } from '../../../../../java/lang/StackTraceElement.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Thread } from '../../../../../java/lang/Thread.d.ts'
import type { Thread$State } from '../../../../../java/lang/Thread$State.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ThreadInformation } from '../../../../../org/apache/logging/log4j/message/ThreadInformation.d.ts'
export class BasicThreadInformation extends Object implements ThreadInformation {
    constructor(thread: Thread)
    // private id: number;
    // private isDaemon: boolean;
    // private name: string;
    // private priority: number;
    // private state: Thread$State;
    // private threadGroupName: string;
    equals(o: Object | null): boolean;
    hashCode(): number;
    printStack(sb: StringBuilder, trace: StackTraceElement[]): void;
    printThreadInfo(sb: StringBuilder): void;
}