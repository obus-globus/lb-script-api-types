import type { CharsTrie$Iterator } from '../../../../com/ibm/icu/util/CharsTrie$Iterator.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class CharsTrie {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static iterator(paramarg0: CharSequence, paramarg1: number, paramarg2: number): CharsTrie$Iterator;
}