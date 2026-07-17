import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { PolyglotImpl$VMObject } from '../../../../com/oracle/truffle/polyglot/PolyglotImpl$VMObject.d.ts'
import type { WeakReference } from '../../../../java/lang/ref/WeakReference.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Level } from '../../../../java/util/logging/Level.d.ts'
import type { LogRecord } from '../../../../java/util/logging/LogRecord.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { AbstractPolyglotImpl$LogHandler } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$LogHandler.d.ts'
export class PolyglotLoggers$LoggerCache extends Object {
    private constructor(handler: AbstractPolyglotImpl$LogHandler, useCurrentContext: boolean, ownerLogLevelsProvider: (param0: PolyglotImpl$VMObject) => JavaMap<string, Level>, rawLoggerIds: string[], ...implicitLevels: Level[])
    // private handler: AbstractPolyglotImpl$LogHandler;
    // private implicitLevels: Level[];
    // private ownerLogLevelsProvider: (param0: PolyglotImpl$VMObject) => JavaMap<string, Level>;
    // private ownerRef: WeakReference<PolyglotImpl$VMObject>;
    // private rawLoggerIds: string[];
    // private useCurrentContext: boolean;
    createLogRecord(level: Level, loggerName: string, message: string, className: string, methodName: string, parameters: Object[], thrown: Throwable): LogRecord;
    getLogHandler(): AbstractPolyglotImpl$LogHandler;
    getLogLevels(): JavaMap<string, Level>;
    getOwner(): PolyglotImpl$VMObject;
    isContextBoundLogger(): boolean;
    setOwner(owner: PolyglotImpl$VMObject): void;
}