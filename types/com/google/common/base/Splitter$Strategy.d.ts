import type { Splitter } from '../../../../com/google/common/base/Splitter.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export interface Splitter$Strategy extends Object{
    iterator(splitter: Splitter, toSplit: CharSequence): Iterator<string>;
}