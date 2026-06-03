import type { AbstractHashFunction } from '../../../../com/google/common/hash/AbstractHashFunction.d.ts'
import type { Hasher } from '../../../../com/google/common/hash/Hasher.d.ts'
import type { ImmutableSupplier } from '../../../../com/google/common/hash/ImmutableSupplier.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Checksum } from '../../../../java/util/zip/Checksum.d.ts'
export class ChecksumHashFunction extends AbstractHashFunction implements Serializable {
    constructor(checksumSupplier: ImmutableSupplier<Checksum>, bits: number, toString: string)
    // private bits: number;
    // private checksumSupplier: ImmutableSupplier<Checksum>;
    // private toString: string;
    bits(): number;
    newHasher(): Hasher;
    newHasher(expectedInputSize: number): Hasher;
    toString(): string;
}