import type { EventBinding } from '../../../../../com/oracle/truffle/api/instrumentation/EventBinding.d.ts'
import type { Thread } from '../../../../../java/lang/Thread.d.ts'
import type { ThreadDeath } from '../../../../../java/lang/ThreadDeath.d.ts'
import type { AtomicReference } from '../../../../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class UnwindException extends ThreadDeath {
    constructor(info: Object, preferredBinding: EventBinding<Object>)
    // private binding: EventBinding<Object>;
    // private hasPreferredBindingSet: boolean;
    // private info: Object;
    // private next: UnwindException;
    // private notifiedOnReturnValue: boolean;
    // private thrownFromBindingCalled: boolean;
    // private thrownThread: AtomicReference<Thread>;
    addNext(ex: UnwindException): void;
    // private checkThrownConsistency(): boolean;
    fillInStackTrace(): Throwable;
    getBinding(): EventBinding<Object>;
    getInfo(): Object;
    getNext(): UnwindException;
    hasPreferredBinding(): boolean;
    isThrownFromBinding(): boolean;
    resetBoundary(unwindBinding: EventBinding<Object>): void;
    resetThread(): void;
    // private resetThreadBoundary(): boolean;
    thrownFromBinding(unwindBinding: EventBinding<Object>): void;
}