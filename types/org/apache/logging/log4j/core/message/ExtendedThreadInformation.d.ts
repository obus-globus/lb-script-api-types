import type { StackTraceElement } from '../../../../../../java/lang/StackTraceElement.d.ts'
import type { StringBuilder } from '../../../../../../java/lang/StringBuilder.d.ts'
import type { LockInfo } from '../../../../../../java/lang/management/LockInfo.d.ts'
import type { ThreadInfo } from '../../../../../../java/lang/management/ThreadInfo.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ThreadInformation } from '../../../../../../org/apache/logging/log4j/message/ThreadInformation.d.ts'
export class ExtendedThreadInformation extends Object implements ThreadInformation {
    constructor(thread: ThreadInfo)
    // private threadInfo: ThreadInfo;
    // private formatLock(sb: StringBuilder, lock: LockInfo): void;
    // private formatState(sb: StringBuilder, info: ThreadInfo): void;
    printStack(sb: StringBuilder, stack: StackTraceElement[]): void;
    printThreadInfo(sb: StringBuilder): void;
}