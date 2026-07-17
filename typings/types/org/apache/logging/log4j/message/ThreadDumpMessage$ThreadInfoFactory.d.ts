import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { StackTraceElement } from '../../../../../java/lang/StackTraceElement.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ThreadInformation } from '../../../../../org/apache/logging/log4j/message/ThreadInformation.d.ts'
export interface ThreadDumpMessage$ThreadInfoFactory extends Object{
    createThreadInfo(): JavaMap<ThreadInformation, StackTraceElement[]>;
}