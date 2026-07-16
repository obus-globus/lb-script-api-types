import type { CharSequence } from '../../../../../../../java/lang/CharSequence.d.ts'
import type { CharsTrie$Iterator } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/CharsTrie$Iterator.d.ts'
export class CharsTrie {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static iterator(paramtrieChars: CharSequence, paramoffset: number, parammaxStringLength: number): CharsTrie$Iterator;
}