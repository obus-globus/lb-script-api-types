import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../../java/util/Iterator.d.ts'
export abstract class SmartList$SingletonIteratorBase<T extends unknown> extends Object implements Iterator<T> {
    private constructor()
    // private myVisited: boolean;
    checkCoModification(): void;
    forEachRemaining(arg0: (param0: T) => void): void;
    getElement(): T;
    hasNext(): boolean;
    next(): T;
}