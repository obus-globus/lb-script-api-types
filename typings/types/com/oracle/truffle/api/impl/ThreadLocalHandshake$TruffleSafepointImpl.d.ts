import type { TruffleSafepoint } from '../../../../../com/oracle/truffle/api/TruffleSafepoint.d.ts'
import type { TruffleSafepoint$CompiledInterruptible } from '../../../../../com/oracle/truffle/api/TruffleSafepoint$CompiledInterruptible.d.ts'
import type { TruffleSafepoint$CompiledInterruptibleFunction } from '../../../../../com/oracle/truffle/api/TruffleSafepoint$CompiledInterruptibleFunction.d.ts'
import type { TruffleSafepoint$Interrupter } from '../../../../../com/oracle/truffle/api/TruffleSafepoint$Interrupter.d.ts'
import type { TruffleSafepoint$Interruptible } from '../../../../../com/oracle/truffle/api/TruffleSafepoint$Interruptible.d.ts'
import type { TruffleSafepoint$InterruptibleFunction } from '../../../../../com/oracle/truffle/api/TruffleSafepoint$InterruptibleFunction.d.ts'
import type { ThreadLocalHandshake } from '../../../../../com/oracle/truffle/api/impl/ThreadLocalHandshake.d.ts'
import type { ThreadLocalHandshake$ActivationResult } from '../../../../../com/oracle/truffle/api/impl/ThreadLocalHandshake$ActivationResult.d.ts'
import type { ThreadLocalHandshake$Handshake } from '../../../../../com/oracle/truffle/api/impl/ThreadLocalHandshake$Handshake.d.ts'
import type { ThreadLocalHandshake$HandshakeEntry } from '../../../../../com/oracle/truffle/api/impl/ThreadLocalHandshake$HandshakeEntry.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Thread } from '../../../../../java/lang/Thread.d.ts'
import type { ReentrantLock } from '../../../../../java/util/concurrent/locks/ReentrantLock.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class ThreadLocalHandshake$TruffleSafepointImpl extends TruffleSafepoint {
    static getCurrent(): TruffleSafepoint;
    static poll(paramlocation: Node): void;
    static pollHere(paramlocation: Node): void;
    static setBlockedThreadInterruptible(paramlocation: Node, paraminterruptible: (param0: Object | null) => void, paramobject: Object | null): void;
    static setBlockedThreadInterruptibleFunction(paramlocation: Node, paraminterruptible: (param0: Object | null) => Object | null, paramobject: Object | null): Object | null;
    constructor(handshake: ThreadLocalHandshake)
    // private blockedAction: TruffleSafepoint$Interrupter;
    // private changeAllowActionsAllowed: boolean;
    // private enabled: boolean;
    readonly fastPendingSet: boolean;
    // private handshakes: ThreadLocalHandshake$HandshakeEntry[];
    // private impl: ThreadLocalHandshake;
    // private interrupted: boolean;
    // private lock: ReentrantLock;
    // private recurringActionsEnabled: boolean;
    // private sideEffectsEnabled: boolean;
    activateThread(handshake: ThreadLocalHandshake$Handshake<any>): ThreadLocalHandshake$ActivationResult;
    addHandshake(t: Thread, handshake: ThreadLocalHandshake$Handshake<any>): void;
    // private addHandshakeImpl(t: Thread, handshake: ThreadLocalHandshake$Handshake<any>, reactivated: boolean): void;
    // private claimEntry(entry: ThreadLocalHandshake$HandshakeEntry): boolean;
    deactivateThread(handshake: ThreadLocalHandshake$Handshake<any>): boolean;
    hasPendingSideEffectingActions(): boolean;
    // private hasSideEffecting(): boolean;
    // private interruptIfPending(location: Node, interrupter: TruffleSafepoint$Interrupter): void;
    isAllowActions(): boolean;
    isFastPendingSet(): boolean;
    // private isPending(): boolean;
    // private isPending(entry: ThreadLocalHandshake$HandshakeEntry): boolean;
    // private lookupEntry(handshake: ThreadLocalHandshake$Handshake<any>): ThreadLocalHandshake$HandshakeEntry;
    processOrNotifyHandshakes(location: Node, toProcessOrNotify: ThreadLocalHandshake$HandshakeEntry[], blockedNotification: boolean): void;
    // private resetPending(): void;
    setAllowActions(enabled: boolean): boolean;
    setAllowSideEffects(enabled: boolean): boolean;
    setBlocked<T extends unknown>(location: Node, interrupter: TruffleSafepoint$Interrupter, interruptible: (param0: T) => void, object: T, beforeInterrupt: () => void, afterInterrupt: (param0: Throwable) => void): void;
    // private setBlockedAfterInterrupt(location: Node, interrupter: TruffleSafepoint$Interrupter, beforeInterrupt: () => void, afterInterrupt: (param0: Throwable) => void): void;
    // private setBlockedBoundary<T extends unknown>(location: Node, interrupter: TruffleSafepoint$Interrupter, interruptible: (param0: T) => void, object: T, beforeInterrupt: () => void, afterInterrupt: (param0: Throwable) => void): void;
    // private setBlockedCompiled<T extends unknown>(location: Node, interrupter: TruffleSafepoint$Interrupter, interruptible: (param0: T) => void, object: T, beforeInterrupt: () => void, afterInterrupt: (param0: Throwable) => void): void;
    setBlockedFunction<R extends unknown, T extends unknown>(location: Node, interrupter: TruffleSafepoint$Interrupter, interruptible: (param0: T) => R, object: T, beforeInterrupt: () => void, afterInterrupt: (param0: Throwable) => void): R;
    // private setBlockedFunctionBoundary<R extends unknown, T extends unknown>(location: Node, interrupter: TruffleSafepoint$Interrupter, interruptible: (param0: T) => R, object: T, beforeInterrupt: () => void, afterInterrupt: (param0: Throwable) => void): R;
    // private setBlockedFunctionCompiled<R extends unknown, T extends unknown>(location: Node, interrupter: TruffleSafepoint$Interrupter, interruptible: (param0: T) => R, object: T, beforeInterrupt: () => void, afterInterrupt: (param0: Throwable) => void): R;
    // private setBlockedImpl(location: Node, interrupter: TruffleSafepoint$Interrupter, processSafepoints: boolean, blocked: boolean): void;
    setChangeAllowActions(changeAllowActionsAllowed: boolean): boolean;
    // private setFastPendingAndInterrupt(t: Thread): void;
    // private takeHandshakeImpl(): ThreadLocalHandshake$HandshakeEntry[];
    takeHandshakes(): ThreadLocalHandshake$HandshakeEntry[];
    // private updateFastPending(): void;
    verifyUnused(): void;
}