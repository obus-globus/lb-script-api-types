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
    static setBlockedThreadInterruptible(paramlocation: Node, paraminterruptible: (param0: Object | null) => void, paramobject: Object | null): void;
    static setBlockedThreadInterruptibleFunction(paramlocation: Node, paraminterruptible: (param0: Object | null) => Object | null, paramobject: Object | null): Object | null;
    constructor(support: Accessor$EngineSupport)
    hasPendingSideEffectingActions(): boolean;
    setAllowActions(enabled: boolean): boolean;
    setAllowSideEffects(enabled: boolean): boolean;
    setBlocked<T extends Object | number | string | boolean>(location: Node, interrupter: TruffleSafepoint$Interrupter, interruptible: (param0: T) => void, object: T, beforeInterrupt: () => void, afterInterrupt: (param0: Throwable) => void): void;
    setBlockedFunction<R extends Object | number | string | boolean, T extends Object | number | string | boolean>(location: Node, interrupter: TruffleSafepoint$Interrupter, interruptible: (param0: T) => R, object: T, beforeInterrupt: () => void, afterInterrupt: (param0: Throwable) => void): R;
    setBlockedWithException<T extends Object | number | string | boolean>(location: Node, interrupter: TruffleSafepoint$Interrupter, interruptible: (param0: T) => void, object: T, beforeInterrupt: () => void, afterInterrupt: (param0: Throwable) => void): void;
}