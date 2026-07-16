import type { TruffleSafepoint$Interrupter } from '../../../../com/oracle/truffle/api/TruffleSafepoint$Interrupter.d.ts'
import type { TruffleSafepoint$Interruptible } from '../../../../com/oracle/truffle/api/TruffleSafepoint$Interruptible.d.ts'
import type { TruffleSafepoint$InterruptibleFunction } from '../../../../com/oracle/truffle/api/TruffleSafepoint$InterruptibleFunction.d.ts'
import type { Accessor$EngineSupport } from '../../../../com/oracle/truffle/api/impl/Accessor$EngineSupport.d.ts'
import type { Node } from '../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export abstract class TruffleSafepoint extends Object {
    static getCurrent(): TruffleSafepoint;
    static poll(paramlocation: Node): void;
    static pollHere(paramlocation: Node): void;
    static setBlockedThreadInterruptible<T extends unknown>(paramlocation: Node, paraminterruptible: (param0: T) => void, paramobject: T): void;
    static setBlockedThreadInterruptibleFunction<T extends unknown, R extends unknown>(paramlocation: Node, paraminterruptible: (param0: T) => R, paramobject: T): R;
    constructor(support: Accessor$EngineSupport)
    hasPendingSideEffectingActions(): boolean;
    setAllowActions(enabled: boolean): boolean;
    setAllowSideEffects(enabled: boolean): boolean;
    setBlocked<T extends unknown>(location: Node, interrupter: TruffleSafepoint$Interrupter, interruptible: (param0: T) => void, object: T, beforeInterrupt: () => void, afterInterrupt: (param0: Throwable) => void): void;
    setBlockedFunction<R extends unknown, T extends unknown>(location: Node, interrupter: TruffleSafepoint$Interrupter, interruptible: (param0: T) => R, object: T, beforeInterrupt: () => void, afterInterrupt: (param0: Throwable) => void): R;
    setBlockedWithException<T extends unknown>(location: Node, interrupter: TruffleSafepoint$Interrupter, interruptible: (param0: T) => void, object: T, beforeInterrupt: () => void, afterInterrupt: (param0: Throwable) => void): void;
}