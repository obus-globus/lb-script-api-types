import type { Object } from '../../java/lang/Object.d.ts'
import type { Source } from '../../kotlinx/io/Source.d.ts'
export class SourcesKt extends Object {
    static OVERFLOW_DIGIT_START: number;
    static OVERFLOW_ZONE: number;
    static indexOf(paramarg0: Source, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static readByteArray(paramarg0: Source): number[];
    static readByteArray(paramarg0: Source, paramarg1: number): number[];
    static readDecimalLong(paramarg0: Source): number;
    static readDouble(paramarg0: Source): number;
    static readDoubleLe(paramarg0: Source): number;
    static readFloat(paramarg0: Source): number;
    static readFloatLe(paramarg0: Source): number;
    static readHexadecimalUnsignedLong(paramarg0: Source): number;
    static readIntLe(paramarg0: Source): number;
    static readLongLe(paramarg0: Source): number;
    static readShortLe(paramarg0: Source): number;
    static readTo(paramarg0: Source, paramarg1: number[], paramarg2: number, paramarg3: number): void;
    static readUByte(paramarg0: Source): number;
    static readUInt(paramarg0: Source): number;
    static readUIntLe(paramarg0: Source): number;
    static readULong(paramarg0: Source): number;
    static readULongLe(paramarg0: Source): number;
    static readUShort(paramarg0: Source): number;
    static readUShortLe(paramarg0: Source): number;
    static startsWith(paramarg0: Source, paramarg1: number): boolean;
}