import type { StackTraceElement } from '../../../../../../java/lang/StackTraceElement.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ThreadDumpMessage$ThreadInfoFactory } from '../../../../../../org/apache/logging/log4j/message/ThreadDumpMessage$ThreadInfoFactory.d.ts'
import type { ThreadInformation } from '../../../../../../org/apache/logging/log4j/message/ThreadInformation.d.ts'
export class ExtendedThreadInfoFactory extends Object implements ThreadDumpMessage$ThreadInfoFactory {
    constructor()
    createThreadInfo(): Map<ThreadInformation, StackTraceElement[]>;
}