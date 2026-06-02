import type { ObjectOutputStream } from '../../../../../../java/io/ObjectOutputStream.d.ts'
import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { StackTraceElement } from '../../../../../../java/lang/StackTraceElement.d.ts'
import type { MarshalledObject } from '../../../../../../java/rmi/MarshalledObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../../java/lang/Throwable.d.ts'
import type { Level } from '../../../../../../org/apache/logging/log4j/Level.d.ts'
import type { Marker } from '../../../../../../org/apache/logging/log4j/Marker.d.ts'
import type { LogEvent } from '../../../../../../org/apache/logging/log4j/core/LogEvent.d.ts'
import type { Log4jLogEvent } from '../../../../../../org/apache/logging/log4j/core/impl/Log4jLogEvent.d.ts'
import type { ThrowableProxy } from '../../../../../../org/apache/logging/log4j/core/impl/ThrowableProxy.d.ts'
import type { Message } from '../../../../../../org/apache/logging/log4j/message/Message.d.ts'
import type { StringMap } from '../../../../../../org/apache/logging/log4j/util/StringMap.d.ts'
export class Log4jLogEvent$LogEventProxy extends Object implements Serializable {
    constructor(event: LogEvent, includeLocation: boolean)
    constructor(event: Log4jLogEvent, includeLocation: boolean)
    // private contextData: StringMap;
    // private contextStack: (Object | null)[];
    // private isEndOfBatch: boolean;
    // private isLocationRequired: boolean;
    // private level: Level;
    // private loggerFQCN: string;
    // private loggerName: string;
    // private marker: Marker;
    // private marshalledMessage: MarshalledObject<Message>;
    // private message: Message;
    // private messageString: string;
    // private nanoOfMillisecond: number;
    // private nanoTime: number;
    // private source: StackTraceElement;
    // private threadId: number;
    // private threadName: string;
    // private threadPriority: number;
    // private thrown: Throwable;
    // private thrownProxy: ThrowableProxy;
    // private timeMillis: number;
    // private message(): Message;
    readResolve(): Object;
    // private writeObject(s: ObjectOutputStream): void;
}