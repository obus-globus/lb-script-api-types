import type { Splitter } from '../../../../com/google/common/base/Splitter.d.ts'
import type { Splitter$SplittingIterator } from '../../../../com/google/common/base/Splitter$SplittingIterator.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class Splitter$MapSplitter extends Object {
    constructor(arg0: Splitter, arg1: Splitter, arg2: Splitter$SplittingIterator)
    // private entrySplitter: Splitter;
    // private outerSplitter: Splitter;
    split(sequence: CharSequence): { [key: string]: string };
}