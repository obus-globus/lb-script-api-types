import type { PolyglotLoggers$ImmutableLogRecord$FormatKind } from '../../../../com/oracle/truffle/polyglot/PolyglotLoggers$ImmutableLogRecord$FormatKind.d.ts'
import type { ResourceBundle } from '../../../../java/util/ResourceBundle.d.ts'
import type { Level } from '../../../../java/util/logging/Level.d.ts'
import type { LogRecord } from '../../../../java/util/logging/LogRecord.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class PolyglotLoggers$ImmutableLogRecord extends LogRecord {
    constructor(level: Level, loggerName: string, message: string, className: string, methodName: string, parameters: Object[], thrown: Throwable, formatKind: PolyglotLoggers$ImmutableLogRecord$FormatKind)
    // private formatKind: PolyglotLoggers$ImmutableLogRecord$FormatKind;
    // private isCallerClassSet: boolean;
    // private isCallerMethodSet: boolean;
    getFormatKind(): PolyglotLoggers$ImmutableLogRecord$FormatKind;
    isCallerClassSet(): boolean;
    isCallerMethodSet(): boolean;
    setLevel(level: Level): void;
    setLoggerName(name: string): void;
    setMessage(message: string): void;
    setMillis(millis: number): void;
    setParameters(parameters: Object[]): void;
    setResourceBundle(bundle: ResourceBundle): void;
    setResourceBundleName(name: string): void;
    setSequenceNumber(seq: number): void;
    setSourceClassName(sourceClassName: string): void;
    setSourceMethodName(sourceMethodName: string): void;
    setThreadID(threadID: number): void;
    setThrown(thrown: Throwable): void;
    toString(): string;
}