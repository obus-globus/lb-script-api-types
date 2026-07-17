import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class InternalResource$CPUArchitecture extends Enum<InternalResource$CPUArchitecture> {
    static AARCH64: InternalResource$CPUArchitecture;
    static AMD64: InternalResource$CPUArchitecture;
    static UNSUPPORTED: InternalResource$CPUArchitecture;
    static getCurrent(): InternalResource$CPUArchitecture;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): InternalResource$CPUArchitecture;
    static values(): InternalResource$CPUArchitecture[];
    private constructor(id: string)
    // private id: string;
    toString(): string;
    name(): "AARCH64" | "AMD64" | "UNSUPPORTED";
}