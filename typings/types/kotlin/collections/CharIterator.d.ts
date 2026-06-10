import type { Consumer } from '../../java/util/function/Consumer.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Iterator } from '../../java/util/Iterator.d.ts'
export abstract class CharIterator extends Object implements Iterator<string> {
    constructor()
    forEachRemaining(arg0: (param0: string) => void): void;
    next(): string;
    nextChar(): string;
}