import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { SmartList$SingletonIteratorBase } from '../../../../../../kotlin/reflect/jvm/internal/impl/utils/SmartList$SingletonIteratorBase.d.ts'
export class SmartList$SingletonIterator extends SmartList$SingletonIteratorBase<E> {
    constructor(null_: SmartList$SingletonIterator)
    // private myInitialModCount: number;
    checkCoModification(): void;
    getElement<E extends unknown>(): E;
    remove(): void;
}