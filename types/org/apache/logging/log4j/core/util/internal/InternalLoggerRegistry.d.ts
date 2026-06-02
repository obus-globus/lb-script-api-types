import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { ReferenceQueue } from '../../../../../../../java/lang/ref/ReferenceQueue.d.ts'
import type { WeakReference } from '../../../../../../../java/lang/ref/WeakReference.d.ts'
import type { Lock } from '../../../../../../../java/util/concurrent/locks/Lock.d.ts'
import type { ReadWriteLock } from '../../../../../../../java/util/concurrent/locks/ReadWriteLock.d.ts'
import type { BiFunction } from '../../../../../../../java/util/function/BiFunction.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Logger } from '../../../../../../../org/apache/logging/log4j/core/Logger.d.ts'
import type { MessageFactory } from '../../../../../../../org/apache/logging/log4j/message/MessageFactory.d.ts'
export class InternalLoggerRegistry extends Object {
    constructor()
    // private lock: ReadWriteLock;
    // private loggerRefByNameByMessageFactory: Map<MessageFactory, { [key: string]: WeakReference<Logger> }>;
    // private readLock: Lock;
    // private staleLoggerRefs: ReferenceQueue<Logger>;
    // private writeLock: Lock;
    computeIfAbsent(name: string, messageFactory: MessageFactory, loggerSupplier: (param0: string, param1: MessageFactory) => Logger): Logger;
    // private expungeStaleEntries(): void;
    getLogger(name: string, messageFactory: MessageFactory): Logger;
    getLoggers(): E[];
    hasLogger(name: string, messageFactoryClass: Class<MessageFactory>): boolean;
    hasLogger(name: string, messageFactory: MessageFactory): boolean;
}