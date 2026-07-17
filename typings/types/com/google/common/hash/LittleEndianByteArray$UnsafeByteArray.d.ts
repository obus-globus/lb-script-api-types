import type { LittleEndianByteArray$LittleEndianBytes } from '../../../../com/google/common/hash/LittleEndianByteArray$LittleEndianBytes.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class LittleEndianByteArray$UnsafeByteArray extends Enum<LittleEndianByteArray$UnsafeByteArray> implements LittleEndianByteArray$LittleEndianBytes {
    static UNSAFE_BIG_ENDIAN: LittleEndianByteArray$UnsafeByteArray;
    static UNSAFE_LITTLE_ENDIAN: LittleEndianByteArray$UnsafeByteArray;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): LittleEndianByteArray$UnsafeByteArray;
    static values(): LittleEndianByteArray$UnsafeByteArray[];
    private constructor()
    usesFastPath(): boolean;
    name(): "UNSAFE_LITTLE_ENDIAN" | "UNSAFE_BIG_ENDIAN";
}