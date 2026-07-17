import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class PolyglotEngineOptions$SizeUnit extends Enum<PolyglotEngineOptions$SizeUnit> {
    static BYTE: PolyglotEngineOptions$SizeUnit;
    static GIGABYTE: PolyglotEngineOptions$SizeUnit;
    static KILOBYTE: PolyglotEngineOptions$SizeUnit;
    static MEGABYTE: PolyglotEngineOptions$SizeUnit;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): PolyglotEngineOptions$SizeUnit;
    static values(): PolyglotEngineOptions$SizeUnit[];
    private constructor(symbol: string, factor: number)
    // private factor: number;
    // private symbol: string;
    name(): "GIGABYTE" | "MEGABYTE" | "KILOBYTE" | "BYTE";
}