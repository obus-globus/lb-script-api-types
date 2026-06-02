import type { AbstractByteHasher } from '../../../../com/google/common/hash/AbstractByteHasher.d.ts'
import type { HashCode } from '../../../../com/google/common/hash/HashCode.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Checksum } from '../../../../java/util/zip/Checksum.d.ts'
export class ChecksumHashFunction$ChecksumHasher extends AbstractByteHasher {
    private constructor(null_: ChecksumHashFunction$ChecksumHasher, checksum: Checksum)
    // private checksum: Checksum;
    hash(): HashCode;
    update(b: ByteBuffer): void;
    update(b: number): void;
    update(bytes: number[], off: number, len: number): void;
}