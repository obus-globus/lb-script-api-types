import type { TruffleLogger } from '../../../../com/oracle/truffle/api/TruffleLogger.d.ts'
import type { TruffleLogger$AbstractLoggerRef } from '../../../../com/oracle/truffle/api/TruffleLogger$AbstractLoggerRef.d.ts'
import type { Reference } from '../../../../java/lang/ref/Reference.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TruffleLogger$ChildLoggerRef extends TruffleLogger$AbstractLoggerRef {
    static reachabilityFence(paramarg0: Object): void;
    constructor(logger: TruffleLogger)
    // private parent: Reference<TruffleLogger>;
    close(): void;
    setParent(parent: TruffleLogger): void;
}