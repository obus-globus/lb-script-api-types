import type { ByteBuffer } from '../../../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CodePointTrie$Type } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/CodePointTrie$Type.d.ts'
import type { CodePointTrie$ValueWidth } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/CodePointTrie$ValueWidth.d.ts'
export class CodePointTrie$Fast32 {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static fromBinary(paramtype: CodePointTrie$Type, paramvalueWidth: CodePointTrie$ValueWidth, parambytes: ByteBuffer): (Object | null)[];
    static fromBinary(paramvalueWidth: CodePointTrie$ValueWidth, parambytes: ByteBuffer): (Object | null)[];
    static fromBinary(parambytes: ByteBuffer): (Object | null)[];
}