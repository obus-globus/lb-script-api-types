import type { TruffleLogger } from '../../../../com/oracle/truffle/api/TruffleLogger.d.ts'
import type { TruffleLogger$AbstractLoggerRef } from '../../../../com/oracle/truffle/api/TruffleLogger$AbstractLoggerRef.d.ts'
import type { TruffleLogger$LoggerCache } from '../../../../com/oracle/truffle/api/TruffleLogger$LoggerCache.d.ts'
import type { TruffleLogger$LoggerCache$LoggerNode } from '../../../../com/oracle/truffle/api/TruffleLogger$LoggerCache$LoggerNode.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TruffleLogger$LoggerCache$NamedLoggerRef extends TruffleLogger$AbstractLoggerRef {
    static reachabilityFence(paramarg0: Object): void;
    constructor(null_: TruffleLogger$LoggerCache, logger: TruffleLogger, loggerName: string)
    // private loggerName: string;
    // private node: TruffleLogger$LoggerCache$LoggerNode;
    close(): void;
    setNode(node: TruffleLogger$LoggerCache$LoggerNode): void;
}