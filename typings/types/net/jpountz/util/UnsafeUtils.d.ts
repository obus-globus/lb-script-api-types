import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class UnsafeUtils extends Enum<UnsafeUtils> {
    static checkLength(paramarg0: number): void;
    static checkRange(paramarg0: number[], paramarg1: number): void;
    static checkRange(paramarg0: number[], paramarg1: number, paramarg2: number): void;
    static readByte(paramarg0: number[], paramarg1: number): number;
    static readInt(paramarg0: number[], paramarg1: number): number;
    static readIntLE(paramarg0: number[], paramarg1: number): number;
    static readLong(paramarg0: number[], paramarg1: number): number;
    static readLongLE(paramarg0: number[], paramarg1: number): number;
    static readShort(paramarg0: number[], paramarg1: number): number;
    static readShortLE(paramarg0: number[], paramarg1: number): number;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): UnsafeUtils;
    static values(): UnsafeUtils[];
    static writeByte(paramarg0: number[], paramarg1: number, paramarg2: number): void;
    static writeInt(paramarg0: number[], paramarg1: number, paramarg2: number): void;
    static writeLong(paramarg0: number[], paramarg1: number, paramarg2: number): void;
    static writeShort(paramarg0: number[], paramarg1: number, paramarg2: number): void;
    static writeShortLE(paramarg0: number[], paramarg1: number, paramarg2: number): void;
    private constructor()
}