import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export abstract class UnmodifiableIterator<E extends Object | number | string | boolean> extends Object implements Iterator<E> {
    constructor()
    forEachRemaining(arg0: (param0: E) => void): void;
    remove(): void;
}