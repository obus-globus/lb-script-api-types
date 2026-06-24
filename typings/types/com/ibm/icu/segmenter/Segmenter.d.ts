import type { Segments } from '../../../../com/ibm/icu/segmenter/Segments.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export interface Segmenter extends Object{
    segment(arg0: CharSequence): Segments;
}