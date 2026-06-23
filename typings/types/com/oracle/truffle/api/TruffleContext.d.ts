import type { TruffleSafepoint$Interrupter } from '../../../../com/oracle/truffle/api/TruffleSafepoint$Interrupter.d.ts'
import type { TruffleSafepoint$InterruptibleFunction } from '../../../../com/oracle/truffle/api/TruffleSafepoint$InterruptibleFunction.d.ts'
import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Source } from '../../../../com/oracle/truffle/api/source/Source.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Future } from '../../../../java/util/concurrent/Future.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TruffleContext extends Object implements AutoCloseable {
    private constructor()
    private constructor(creatorContext: TruffleContext)
    constructor(polyglotContext: Object, parentContext: TruffleContext)
    // private creator: boolean;
    // private creatorContext: TruffleContext;
    // private currentAPI: TruffleContext;
    readonly parent: TruffleContext;
    // private polyglotContext: Object;
    close(): void;
    closeCancelled(closeLocation: Node, message: string): void;
    closeExited(exitLocation: Node, exitCode: number): void;
    closeResourceExhausted(location: Node, message: string): void;
    enter(node: Node): Object;
    equals(obj: Object | null): boolean;
    evalInternal(node: Node, source: Source): Object;
    evalPublic(node: Node, source: Source): Object;
    getParent(): TruffleContext;
    hashCode(): number;
    initializeInternal(node: Node, languageId: string): boolean;
    initializePublic(node: Node, languageId: string): boolean;
    isActive(): boolean;
    isCancelling(): boolean;
    isClosed(): boolean;
    isEntered(): boolean;
    isExiting(): boolean;
    leave(node: Node, prev: Object): void;
    leaveAndEnter<R extends unknown, T extends unknown>(node: Node, interrupter: TruffleSafepoint$Interrupter, interruptible: (param0: T) => R, object: T): R;
    leaveAndEnter<T extends unknown>(node: Node, runWhileOutsideContext: () => T): T;
    pause(): Future<void>;
    resume(pauseFuture: Future<void>): void;
}