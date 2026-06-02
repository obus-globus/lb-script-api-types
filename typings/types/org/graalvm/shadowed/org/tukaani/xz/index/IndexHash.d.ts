import type { InputStream } from '../../../../../../../java/io/InputStream.d.ts'
import type { Check } from '../../../../../../../org/graalvm/shadowed/org/tukaani/xz/check/Check.d.ts'
import type { IndexBase } from '../../../../../../../org/graalvm/shadowed/org/tukaani/xz/index/IndexBase.d.ts'
export class IndexHash extends IndexBase {
    constructor()
    // private hash: Check;
    add(unpaddedSize: number, uncompressedSize: number): void;
    validate(in_: InputStream): void;
}