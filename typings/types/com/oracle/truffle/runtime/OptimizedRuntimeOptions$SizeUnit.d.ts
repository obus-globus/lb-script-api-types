import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class OptimizedRuntimeOptions$SizeUnit extends Enum<OptimizedRuntimeOptions$SizeUnit> {
    static BYTE: OptimizedRuntimeOptions$SizeUnit;
    static GIGABYTE: OptimizedRuntimeOptions$SizeUnit;
    static KILOBYTE: OptimizedRuntimeOptions$SizeUnit;
    static MEGABYTE: OptimizedRuntimeOptions$SizeUnit;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): OptimizedRuntimeOptions$SizeUnit;
    static values(): OptimizedRuntimeOptions$SizeUnit[];
    private constructor(symbol: string, factor: number)
    // private factor: number;
    // private symbol: string;
    name(): "GIGABYTE" | "MEGABYTE" | "KILOBYTE" | "BYTE";
}