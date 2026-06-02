import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Transliterator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/Transliterator.d.ts'
export interface Transliterator$Factory extends Object{
    getInstance(ID: string): Transliterator;
}