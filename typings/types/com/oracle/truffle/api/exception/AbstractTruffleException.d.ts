import type { TruffleObject } from '../../../../../com/oracle/truffle/api/interop/TruffleObject.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { SourceSection } from '../../../../../com/oracle/truffle/api/source/SourceSection.d.ts'
import type { RuntimeException } from '../../../../../java/lang/RuntimeException.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export abstract class AbstractTruffleException extends RuntimeException implements TruffleObject {
    static UNLIMITED_STACK_TRACE: number;
    constructor()
    constructor(prototype: AbstractTruffleException)
    constructor(location: Node)
    constructor(message: string)
    constructor(message: string, location: Node)
    constructor(message: string, cause: Throwable, stackTraceElementLimit: number, location: Node)
    readonly cause: Throwable;
    readonly cause: Throwable | null;
    // private lazyStackTrace: Throwable;
    readonly location: Node;
    readonly stackTraceElementLimit: number;
    createGuestStackTrace(throwable: Throwable): Object;
    fillInStackTrace(): Throwable;
    getEncapsulatingSourceSection(): SourceSection;
    getLazyStackTrace(): Throwable;
    getLocation(): Node;
    getStackTraceElementLimit(): number;
    setLazyStackTrace(stackTrace: Throwable): void;
}