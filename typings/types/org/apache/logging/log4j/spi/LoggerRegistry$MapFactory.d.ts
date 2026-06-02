import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ExtendedLogger } from '../../../../../org/apache/logging/log4j/spi/ExtendedLogger.d.ts'
export interface LoggerRegistry$MapFactory<T extends ExtendedLogger> extends Object{
    createInnerMap(): { [key: string]: T };
    createOuterMap(): { [key: string]: { [key: string]: T } };
    putIfAbsent(innerMap: { [key: string]: T }, name: string, logger: T): void;
}