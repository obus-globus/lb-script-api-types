import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class InternalResource$CPUArchitecture extends Enum<InternalResource$CPUArchitecture> {
    static AARCH64: InternalResource$CPUArchitecture;
    static AMD64: InternalResource$CPUArchitecture;
    static getCurrent(): InternalResource$CPUArchitecture;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): InternalResource$CPUArchitecture;
    static values(): (Object | null)[];
    private constructor(id: string)
    // private id: string;
    toString(): string;
    name(): "AARCH64" | "AMD64";
}