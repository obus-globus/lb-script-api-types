import type { Class } from '../../../../java/lang/Class.d.ts'
import type { BigInteger } from '../../../../java/math/BigInteger.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class SimpleConfig$MemoryUnit extends Enum<SimpleConfig$MemoryUnit> {
    static BYTES: SimpleConfig$MemoryUnit;
    static EXABYTES: SimpleConfig$MemoryUnit;
    static EXBIBYTES: SimpleConfig$MemoryUnit;
    static GIBIBYTES: SimpleConfig$MemoryUnit;
    static GIGABYTES: SimpleConfig$MemoryUnit;
    static KIBIBYTES: SimpleConfig$MemoryUnit;
    static KILOBYTES: SimpleConfig$MemoryUnit;
    static MEBIBYTES: SimpleConfig$MemoryUnit;
    static MEGABYTES: SimpleConfig$MemoryUnit;
    static PEBIBYTES: SimpleConfig$MemoryUnit;
    static PETABYTES: SimpleConfig$MemoryUnit;
    static TEBIBYTES: SimpleConfig$MemoryUnit;
    static TERABYTES: SimpleConfig$MemoryUnit;
    static YOBIBYTES: SimpleConfig$MemoryUnit;
    static YOTTABYTES: SimpleConfig$MemoryUnit;
    static ZEBIBYTES: SimpleConfig$MemoryUnit;
    static ZETTABYTES: SimpleConfig$MemoryUnit;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): SimpleConfig$MemoryUnit;
    static values(): SimpleConfig$MemoryUnit[];
    private constructor(arg2: string, arg3: number, arg4: number)
    // private bytes: BigInteger;
    // private power: number;
    // private powerOf: number;
    // private prefix: string;
    name(): "BYTES" | "KILOBYTES" | "MEGABYTES" | "GIGABYTES" | "TERABYTES" | "PETABYTES" | "EXABYTES" | "ZETTABYTES" | "YOTTABYTES" | "KIBIBYTES" | "MEBIBYTES" | "GIBIBYTES" | "TEBIBYTES" | "PEBIBYTES" | "EXBIBYTES" | "ZEBIBYTES" | "YOBIBYTES";
}