import type { HashFunction } from '../../../../com/google/common/hash/HashFunction.d.ts'
import type { ImmutableSupplier } from '../../../../com/google/common/hash/ImmutableSupplier.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Checksum } from '../../../../java/util/zip/Checksum.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Hashing$ChecksumType extends Enum<Hashing$ChecksumType> implements ImmutableSupplier<Checksum> {
    static ADLER_32: Hashing$ChecksumType;
    static CRC_32: Hashing$ChecksumType;
    static CRC_32C: Hashing$ChecksumType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): Hashing$ChecksumType;
    static values(): Hashing$ChecksumType[];
    private constructor(toString: string)
    hashFunction: HashFunction;
    name(): "CRC_32" | "CRC_32C" | "ADLER_32";
}