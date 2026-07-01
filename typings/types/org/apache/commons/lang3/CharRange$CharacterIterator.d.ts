import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export class CharRange$CharacterIterator extends Object implements Iterator<string> {
    constructor(arg0: string[], arg1: any)
    // private current: string;
    // private hasNext: boolean;
    // private range: string[];
    forEachRemaining(arg0: (param0: string) => void): void;
    hasNext(): boolean;
    next(): string;
    // private prepareNext(): void;
    remove(): void;
}