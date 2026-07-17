import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class SandboxContext$SizeUnit extends Enum<SandboxContext$SizeUnit> {
    static BYTE: SandboxContext$SizeUnit;
    static GIGABYTE: SandboxContext$SizeUnit;
    static KILOBYTE: SandboxContext$SizeUnit;
    static MEGABYTE: SandboxContext$SizeUnit;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): SandboxContext$SizeUnit;
    static values(): SandboxContext$SizeUnit[];
    private constructor(symbol: string, factor: number)
    // private factor: number;
    // private symbol: string;
    name(): "GIGABYTE" | "MEGABYTE" | "KILOBYTE" | "BYTE";
}