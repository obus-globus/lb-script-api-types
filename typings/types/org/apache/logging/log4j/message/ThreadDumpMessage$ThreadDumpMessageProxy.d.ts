import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ThreadDumpMessage } from '../../../../../org/apache/logging/log4j/message/ThreadDumpMessage.d.ts'
export class ThreadDumpMessage$ThreadDumpMessageProxy extends Object implements Serializable {
    constructor(msg: ThreadDumpMessage)
    // private formattedMsg: string;
    // private title: string;
    readResolve(): Object;
}