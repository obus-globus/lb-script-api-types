import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
import type { Segments } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/segmenter/Segments.d.ts'
export interface Segmenter extends Object{
    segment(s: CharSequence): Segments;
}