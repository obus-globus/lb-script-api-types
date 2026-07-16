import type { Trie2$Range } from '../../../../com/ibm/icu/impl/Trie2$Range.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
export class Trie2Writable {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static createFromSerialized(paramarg0: ByteBuffer): Trie2$Range[];
    static getVersion(paramarg0: InputStream, paramarg1: boolean): number;
}