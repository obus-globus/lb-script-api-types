import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Lock } from '../../../../../java/util/concurrent/locks/Lock.d.ts'
import type { ReadWriteLock } from '../../../../../java/util/concurrent/locks/ReadWriteLock.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MessageFactory } from '../../../../../org/apache/logging/log4j/message/MessageFactory.d.ts'
import type { ExtendedLogger } from '../../../../../org/apache/logging/log4j/spi/ExtendedLogger.d.ts'
import type { LoggerRegistry$MapFactory } from '../../../../../org/apache/logging/log4j/spi/LoggerRegistry$MapFactory.d.ts'
export class LoggerRegistry<T extends ExtendedLogger> extends Object {
    constructor()
    constructor(mapFactory: LoggerRegistry$MapFactory<T>)
    // private lock: ReadWriteLock;
    // private loggerByMessageFactoryByName: { [key: string]: Map<MessageFactory, T> };
    // private readLock: Lock;
    // private writeLock: Lock;
    // private createLoggerRefByMessageFactoryMap(ignored: string): Map<MessageFactory, T>;
    getLogger(name: string): T;
    getLogger(name: string, messageFactory: MessageFactory): T;
    getLoggers(): T[];
    getLoggers(destination: T[]): T[];
    hasLogger(name: string): boolean;
    hasLogger(name: string, messageFactoryClass: Class<MessageFactory>): boolean;
    hasLogger(name: string, messageFactory: MessageFactory): boolean;
    putIfAbsent(name: string, messageFactory: MessageFactory, logger: T): void;
}