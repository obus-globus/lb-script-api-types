import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { FlagImpl } from '../../../../../../kotlin/reflect/jvm/internal/impl/km/internal/FlagImpl.d.ts'
export class Modality extends Enum<Modality> {
    static ABSTRACT: Modality;
    static FINAL: Modality;
    static OPEN: Modality;
    static SEALED: Modality;
    static getEntries(): Modality[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Modality;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    // private flag: FlagImpl;
    getFlag$org_jetbrains_kotlin_kotlin_metadata(): FlagImpl;
    name(): "FINAL" | "OPEN" | "ABSTRACT" | "SEALED";
}