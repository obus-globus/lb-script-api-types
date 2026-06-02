import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ExtendedLogger } from '../../../../../org/apache/logging/log4j/spi/ExtendedLogger.d.ts'
import type { LoggerRegistry$MapFactory } from '../../../../../org/apache/logging/log4j/spi/LoggerRegistry$MapFactory.d.ts'
export class LoggerRegistry$WeakMapFactory<T extends ExtendedLogger> extends Object implements LoggerRegistry$MapFactory<T> {
    constructor()
    createInnerMap(): { [key: string]: T };
    createOuterMap(): { [key: string]: { [key: string]: T } };
    putIfAbsent(innerMap: { [key: string]: T }, name: string, logger: T): void;
}