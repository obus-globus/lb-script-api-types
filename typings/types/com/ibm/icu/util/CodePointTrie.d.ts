import type { CodePointTrie$Type } from '../../../../com/ibm/icu/util/CodePointTrie$Type.d.ts'
import type { CodePointTrie$ValueWidth } from '../../../../com/ibm/icu/util/CodePointTrie$ValueWidth.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CodePointTrie {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static fromBinary(paramarg0: CodePointTrie$Type, paramarg1: CodePointTrie$ValueWidth, paramarg2: ByteBuffer): (Object | null)[];
}