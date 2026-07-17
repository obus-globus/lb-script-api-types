import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Splitter } from '../../../../com/google/common/base/Splitter.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class Splitter$MapSplitter extends Object {
    private constructor(outerSplitter: Splitter, entrySplitter: Splitter)
    // private entrySplitter: Splitter;
    // private outerSplitter: Splitter;
    split(sequence: CharSequence): JavaMap<string, string>;
}