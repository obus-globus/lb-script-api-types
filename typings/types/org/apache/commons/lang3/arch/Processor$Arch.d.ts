import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class Processor$Arch extends Enum<Processor$Arch> {
    static BIT_32: Processor$Arch;
    static BIT_64: Processor$Arch;
    static UNKNOWN: Processor$Arch;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Processor$Arch;
    static values(): Processor$Arch[];
    private constructor(arg2: string)
    readonly label: string;
    getLabel(): string;
    name(): "BIT_32" | "BIT_64" | "UNKNOWN";
}