import type { ChecksumHashFunction$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { AbstractByteHasher } from '../../../../com/google/common/hash/AbstractByteHasher.d.ts'
import type { ChecksumHashFunction } from '../../../../com/google/common/hash/ChecksumHashFunction.d.ts'
import type { HashCode } from '../../../../com/google/common/hash/HashCode.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Checksum } from '../../../../java/util/zip/Checksum.d.ts'
export class ChecksumHashFunction$ChecksumHasher extends AbstractByteHasher {
    private constructor(null_: ChecksumHashFunction, checksum: Checksum)
    constructor(null_: ChecksumHashFunction, arg1: Checksum, arg2: ChecksumHashFunction$1)
    // private checksum: Checksum;
    hash(): HashCode;
    update(b: ByteBuffer): void;
    update(b: number): void;
    update(b: number[]): void;
    update(bytes: number[], off: number, len: number): void;
}