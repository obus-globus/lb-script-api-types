import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class Platform$Architecture extends Enum<Platform$Architecture> {
    static ARM32: Platform$Architecture;
    static ARM64: Platform$Architecture;
    static PPC64LE: Platform$Architecture;
    static RISCV64: Platform$Architecture;
    static X64: Platform$Architecture;
    static X86: Platform$Architecture;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Platform$Architecture;
    static values(): Platform$Architecture[];
    private constructor(arg2: boolean)
    // private is64Bit: boolean;
    is32Bit(): boolean;
    is64Bit(): boolean;
    name(): "X64" | "X86" | "ARM64" | "ARM32" | "PPC64LE" | "RISCV64";
}