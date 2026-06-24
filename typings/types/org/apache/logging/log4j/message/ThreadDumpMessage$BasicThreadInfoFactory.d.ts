import type { ThreadDumpMessage$1 } from '../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { StackTraceElement } from '../../../../../java/lang/StackTraceElement.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ThreadDumpMessage$ThreadInfoFactory } from '../../../../../org/apache/logging/log4j/message/ThreadDumpMessage$ThreadInfoFactory.d.ts'
import type { ThreadInformation } from '../../../../../org/apache/logging/log4j/message/ThreadInformation.d.ts'
export class ThreadDumpMessage$BasicThreadInfoFactory extends Object implements ThreadDumpMessage$ThreadInfoFactory {
    private constructor()
    constructor(arg0: ThreadDumpMessage$1)
    createThreadInfo(): Map<ThreadInformation, StackTraceElement[]>;
}