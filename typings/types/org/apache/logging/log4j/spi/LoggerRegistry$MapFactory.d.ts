import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ExtendedLogger } from '../../../../../org/apache/logging/log4j/spi/ExtendedLogger.d.ts'
export interface LoggerRegistry$MapFactory<T extends ExtendedLogger> extends Object{
    createInnerMap(): JavaMap<string, T>;
    createOuterMap(): JavaMap<string, JavaMap<string, T>>;
    putIfAbsent(innerMap: JavaMap<string, T>, name: string, logger: T): void;
}