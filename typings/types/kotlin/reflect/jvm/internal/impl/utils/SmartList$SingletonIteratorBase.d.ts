import type { SmartList$1 } from '../../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../../java/util/Iterator.d.ts'
export abstract class SmartList$SingletonIteratorBase<T extends unknown> extends Object implements Iterator<T> {
    private constructor()
    constructor(arg0: SmartList$1)
    // private myVisited: boolean;
    checkCoModification(): void;
    forEachRemaining(arg0: (param0: T) => void): void;
    getElement(): T;
    hasNext(): boolean;
    next(): T;
}