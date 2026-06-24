import type { Splitter$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Splitter } from '../../../../com/google/common/base/Splitter.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class Splitter$MapSplitter extends Object {
    private constructor(outerSplitter: Splitter, entrySplitter: Splitter)
    constructor(arg0: Splitter, arg1: Splitter, arg2: Splitter$1)
    // private entrySplitter: Splitter;
    // private outerSplitter: Splitter;
    split(sequence: CharSequence): { [key: string]: string };
}