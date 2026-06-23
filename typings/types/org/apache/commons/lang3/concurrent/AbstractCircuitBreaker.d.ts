import type { PropertyChangeListener } from '../../../../../java/beans/PropertyChangeListener.d.ts'
import type { PropertyChangeSupport } from '../../../../../java/beans/PropertyChangeSupport.d.ts'
import type { AtomicReference } from '../../../../../java/util/concurrent/atomic/AtomicReference.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AbstractCircuitBreaker$State } from '../../../../../org/apache/commons/lang3/concurrent/AbstractCircuitBreaker$State.d.ts'
import type { CircuitBreaker } from '../../../../../org/apache/commons/lang3/concurrent/CircuitBreaker.d.ts'
export abstract class AbstractCircuitBreaker<T extends unknown> extends Object implements CircuitBreaker<T> {
    static PROPERTY_NAME: string;
    constructor()
    // private changeSupport: PropertyChangeSupport;
    // private state: AtomicReference<AbstractCircuitBreaker$State>;
    addChangeListener(arg0: PropertyChangeListener): void;
    changeState(arg0: AbstractCircuitBreaker$State): void;
    checkState(): boolean;
    close(): void;
    incrementAndCheckState(arg0: T): boolean;
    isClosed(): boolean;
    isOpen(): boolean;
    open(): void;
    removeChangeListener(arg0: PropertyChangeListener): void;
}