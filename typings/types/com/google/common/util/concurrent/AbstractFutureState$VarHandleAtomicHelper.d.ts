import type { AbstractFuture$Listener } from '../../../../../com/google/common/util/concurrent/AbstractFuture$Listener.d.ts'
import type { AbstractFutureState } from '../../../../../com/google/common/util/concurrent/AbstractFutureState.d.ts'
import type { AbstractFutureState$AtomicHelper } from '../../../../../com/google/common/util/concurrent/AbstractFutureState$AtomicHelper.d.ts'
import type { AbstractFutureState$Waiter } from '../../../../../com/google/common/util/concurrent/AbstractFutureState$Waiter.d.ts'
import type { Thread } from '../../../../../java/lang/Thread.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractFutureState$VarHandleAtomicHelper extends AbstractFutureState$AtomicHelper {
    constructor(arg0: any)
    atomicHelperTypeForTest(): string;
    casListeners(future: AbstractFutureState<Object>, expect: AbstractFuture$Listener, update: AbstractFuture$Listener): boolean;
    casValue(future: AbstractFutureState<Object>, expect: Object, update: Object): boolean;
    casWaiters(future: AbstractFutureState<Object>, expect: AbstractFutureState$Waiter, update: AbstractFutureState$Waiter): boolean;
    gasListeners(future: AbstractFutureState<Object>, update: AbstractFuture$Listener): AbstractFuture$Listener;
    gasWaiters(future: AbstractFutureState<Object>, update: AbstractFutureState$Waiter): AbstractFutureState$Waiter;
    putNext(waiter: AbstractFutureState$Waiter, newValue: AbstractFutureState$Waiter): void;
    putThread(waiter: AbstractFutureState$Waiter, newValue: Thread): void;
}