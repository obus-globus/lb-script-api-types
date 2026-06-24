import type { Hashing$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { HashFunction } from '../../../../com/google/common/hash/HashFunction.d.ts'
import type { ImmutableSupplier } from '../../../../com/google/common/hash/ImmutableSupplier.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Hashing$Crc32CSupplier extends Enum<Hashing$Crc32CSupplier> implements ImmutableSupplier<HashFunction> {
    static ABSTRACT_HASH_FUNCTION: Hashing$Crc32CSupplier;
    static JAVA_UTIL_ZIP: Hashing$Crc32CSupplier;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): Hashing$Crc32CSupplier;
    static values(): (Object | null)[];
    private constructor()
    constructor(arg2: Hashing$1)
    name(): "JAVA_UTIL_ZIP" | "ABSTRACT_HASH_FUNCTION";
}