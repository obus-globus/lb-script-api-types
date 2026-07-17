import type { CallTarget } from '../../../../com/oracle/truffle/api/CallTarget.d.ts'
import type { TruffleStackTraceElement } from '../../../../com/oracle/truffle/api/TruffleStackTraceElement.d.ts'
import type { Frame } from '../../../../com/oracle/truffle/api/frame/Frame.d.ts'
import type { Exception } from '../../../../java/lang/Exception.d.ts'
import type { StackTraceElement } from '../../../../java/lang/StackTraceElement.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class TruffleStackTrace extends Exception {
    static fillIn(paramthrowable: Throwable): TruffleStackTrace;
    static getAsynchronousStackTrace(paramtarget: CallTarget, paramframe: Frame): TruffleStackTraceElement[];
    static getStackTrace(paramthrowable: Throwable): TruffleStackTraceElement[];
    private constructor(frames: TruffleStackTraceElement[], lazyFrames: number)
    // private frames: TruffleStackTraceElement[];
    // private lazyFrames: number;
    // private materializedHostException: Throwable;
    // private originatedInHostLanguage: boolean;
    fillInStackTrace(): Throwable;
    getInternalStackTrace(): StackTraceElement[];
    // private materializeHostException(throwable: Throwable): void;
    toString(): string;
}