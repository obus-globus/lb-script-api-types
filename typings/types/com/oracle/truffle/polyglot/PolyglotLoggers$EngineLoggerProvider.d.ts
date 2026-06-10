import type { TruffleLogger } from '../../../../com/oracle/truffle/api/TruffleLogger.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Level } from '../../../../java/util/logging/Level.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AbstractPolyglotImpl$LogHandler } from '../../../../org/graalvm/polyglot/impl/AbstractPolyglotImpl$LogHandler.d.ts'
export class PolyglotLoggers$EngineLoggerProvider extends Object implements Function<string, TruffleLogger> {
    static identity(): (param0: Object | null) => Object | null;
    constructor(logHandler: AbstractPolyglotImpl$LogHandler, logLevels: { [key: string]: Level })
    // private logHandler: AbstractPolyglotImpl$LogHandler;
    // private logLevels: { [key: string]: Level };
    // private loggers: Object;
    andThen<V extends Object | number | string | boolean>(arg0: (param0: TruffleLogger) => V): (param0: string) => V;
    apply(loggerId: string): TruffleLogger;
    compose<V extends Object | number | string | boolean>(arg0: (param0: V) => string): (param0: V) => TruffleLogger;
}