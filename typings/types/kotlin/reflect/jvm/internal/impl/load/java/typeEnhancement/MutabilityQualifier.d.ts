import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class MutabilityQualifier extends Enum<MutabilityQualifier> {
    static MUTABLE: MutabilityQualifier;
    static READ_ONLY: MutabilityQualifier;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): MutabilityQualifier;
    static values(): MutabilityQualifier[];
    private constructor()
    name(): "READ_ONLY" | "MUTABLE";
}