import type { LogSink } from '../../../../dev/kastle/webrtc/logging/LogSink.d.ts'
import type { Logging$Severity } from '../../../../dev/kastle/webrtc/logging/Logging$Severity.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class Logging extends Object {
    static addLogSink(paramarg0: Logging$Severity, paramarg1: LogSink): void;
    static error(paramarg0: string): void;
    static error(paramarg0: string, paramarg1: Throwable): void;
    static info(paramarg0: string): void;
    static log(paramarg0: Logging$Severity, paramarg1: string): void;
    static logThreads(paramarg0: boolean): void;
    static logTimestamps(paramarg0: boolean): void;
    static logToDebug(paramarg0: Logging$Severity): void;
    static verbose(paramarg0: string): void;
    static warn(paramarg0: string): void;
    constructor()
}