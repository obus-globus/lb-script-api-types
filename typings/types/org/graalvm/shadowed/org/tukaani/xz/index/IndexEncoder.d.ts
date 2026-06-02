import type { OutputStream } from '../../../../../../../java/io/OutputStream.d.ts'
import type { IndexBase } from '../../../../../../../org/graalvm/shadowed/org/tukaani/xz/index/IndexBase.d.ts'
import type { IndexRecord } from '../../../../../../../org/graalvm/shadowed/org/tukaani/xz/index/IndexRecord.d.ts'
export class IndexEncoder extends IndexBase {
    constructor()
    // private records: IndexRecord[];
    add(unpaddedSize: number, uncompressedSize: number): void;
    encode(out: OutputStream): void;
}