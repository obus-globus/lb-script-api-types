import type { CharacterIterator } from '../../../java/text/CharacterIterator.d.ts'
import type { IntStream } from '../../../java/util/stream/IntStream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
import type { Cloneable } from '../../../java/lang/Cloneable.d.ts'
export class Segment extends Object implements CharacterIterator, CharSequence, Cloneable {
    static DONE: string;
    static compare(paramarg0: CharSequence, paramarg1: CharSequence): number;
    constructor()
    constructor(arg0: string[], arg1: number, arg2: number)
    array: string[];
    // private copy: boolean;
    count: number;
    /*not mapped: */ length(): number;
    offset: number;
    readonly partialReturn: boolean;
    // private pos: number;
    chars(): IntStream;
    clone(): Object;
    codePoints(): IntStream;
    current(): string;
    first(): string;
    get(arg0: number): string;
    getBeginIndex(): number;
    getChars(arg0: number, arg1: number, arg2: string[], arg3: number): void;
    getEndIndex(): number;
    getIndex(): number;
    isEmpty(): boolean;
    isPartialReturn(): boolean;
    last(): string;
    next(): string;
    previous(): string;
    setIndex(arg0: number): string;
    setPartialReturn(arg0: boolean): void;
    subSequence(arg0: number, arg1: number): CharSequence;
    toString(): string;
}