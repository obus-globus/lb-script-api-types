import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ByteIterator } from '../../../../../../../net/caffeinemc/mods/sodium/client/util/iterator/ByteIterator.d.ts'
export class ByteArrayIterator extends Object implements ByteIterator {
    constructor(arg0: number[], arg1: number)
    // private elements: number[];
    // private index: number;
    // private lastIndex: number;
    hasNext(): boolean;
    nextByteAsInt(): number;
}