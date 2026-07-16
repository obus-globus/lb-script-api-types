import type { InputStream } from '../../../../../../../java/io/InputStream.d.ts'
import type { ByteBuffer } from '../../../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Trie2$Range } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/Trie2$Range.d.ts'
export class Trie2_16 {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static createFromSerialized(parambytes: ByteBuffer): Trie2$Range[];
    static createFromSerialized(parambytes: ByteBuffer): (Object | null)[];
    static getVersion(paramis: InputStream, paramlittleEndianOk: boolean): number;
}