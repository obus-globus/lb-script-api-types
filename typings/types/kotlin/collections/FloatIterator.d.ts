import type { Consumer } from '../../java/util/function/Consumer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Iterator } from '../../java/util/Iterator.d.ts'
export abstract class FloatIterator extends Object implements Iterator<number> {
    constructor()
    forEachRemaining(arg0: (param0: number) => void): void;
    next(): number;
    nextFloat(): number;
}