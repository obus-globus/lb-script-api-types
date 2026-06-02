import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class Processor$Type extends Enum<Processor$Type> {
    static AARCH_64: Processor$Type;
    static IA_64: Processor$Type;
    static PPC: Processor$Type;
    static RISC_V: Processor$Type;
    static UNKNOWN: Processor$Type;
    static X86: Processor$Type;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Processor$Type;
    static values(): (Object | null)[];
    private constructor(arg2: string)
    readonly label: string;
    getLabel(): string;
    name(): "AARCH_64" | "X86" | "IA_64" | "PPC" | "RISC_V" | "UNKNOWN";
}