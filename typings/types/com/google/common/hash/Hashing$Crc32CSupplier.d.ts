import type { HashFunction } from '../../../../com/google/common/hash/HashFunction.d.ts'
import type { ImmutableSupplier } from '../../../../com/google/common/hash/ImmutableSupplier.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Hashing$Crc32CSupplier extends Enum<Hashing$Crc32CSupplier> implements ImmutableSupplier<HashFunction> {
    static ABSTRACT_HASH_FUNCTION: Hashing$Crc32CSupplier;
    static JAVA_UTIL_ZIP: Hashing$Crc32CSupplier;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): Hashing$Crc32CSupplier;
    static values(): Hashing$Crc32CSupplier[];
    constructor(arg2: any)
    name(): "JAVA_UTIL_ZIP" | "ABSTRACT_HASH_FUNCTION";
}