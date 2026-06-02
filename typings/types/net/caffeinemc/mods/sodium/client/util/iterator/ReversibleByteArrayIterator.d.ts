import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ByteIterator } from '../../../../../../../net/caffeinemc/mods/sodium/client/util/iterator/ByteIterator.d.ts'
export class ReversibleByteArrayIterator extends Object implements ByteIterator {
    constructor(arg0: number[], arg1: number, arg2: boolean)
    // private currentIndex: number;
    // private elements: number[];
    // private remaining: number;
    // private step: number;
    hasNext(): boolean;
    nextByteAsInt(): number;
}