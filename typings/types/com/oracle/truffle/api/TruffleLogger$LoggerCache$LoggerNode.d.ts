import type { TruffleLogger } from '../../../../com/oracle/truffle/api/TruffleLogger.d.ts'
import type { TruffleLogger$LoggerCache } from '../../../../com/oracle/truffle/api/TruffleLogger$LoggerCache.d.ts'
import type { TruffleLogger$LoggerCache$NamedLoggerRef } from '../../../../com/oracle/truffle/api/TruffleLogger$LoggerCache$NamedLoggerRef.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TruffleLogger$LoggerCache$LoggerNode extends Object {
    constructor(null_: TruffleLogger$LoggerCache, parent: TruffleLogger$LoggerCache$LoggerNode, loggerRef: TruffleLogger$LoggerCache$NamedLoggerRef)
    // private children: { [key: string]: TruffleLogger$LoggerCache$LoggerNode };
    // private loggerRef: TruffleLogger$LoggerCache$NamedLoggerRef;
    // private parent: TruffleLogger$LoggerCache$LoggerNode;
    findParentLogger(): TruffleLogger;
    setLoggerRef(loggerRef: TruffleLogger$LoggerCache$NamedLoggerRef): void;
    updateChildParents(): void;
    // private updateChildParentsImpl(parentLogger: TruffleLogger): void;
}