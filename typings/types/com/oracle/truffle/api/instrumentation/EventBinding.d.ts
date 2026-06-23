import type { InstrumentationHandler$AbstractInstrumenter } from '../../../../../com/oracle/truffle/api/instrumentation/InstrumentationHandler$AbstractInstrumenter.d.ts'
import type { Semaphore } from '../../../../../java/util/concurrent/Semaphore.d.ts'
import type { AtomicReference } from '../../../../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class EventBinding<T extends unknown> extends Object {
    constructor(instrumenter: InstrumentationHandler$AbstractInstrumenter, element: T)
    constructor(instrumenter: InstrumentationHandler$AbstractInstrumenter, element: T, attached: boolean)
    readonly attached: AtomicReference<boolean>;
    // private attachedSemaphore: Semaphore;
    readonly disposed: boolean;
    // private disposing: boolean;
    readonly element: T;
    // private instrumenter: InstrumentationHandler$AbstractInstrumenter;
    attach(): void;
    dispose(): void;
    disposeBulk(): void;
    doAttach(): void;
    getElement(): T;
    getInstrumenter(): InstrumentationHandler$AbstractInstrumenter;
    isAttached(): boolean;
    isDisposed(): boolean;
    setDisposingBulk(): void;
    tryAttach(): boolean;
}