import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class ModificationPhase extends Enum<ModificationPhase> {
    static ADDITIONS: ModificationPhase;
    static POST_PROCESSING: ModificationPhase;
    static REMOVALS: ModificationPhase;
    static REPLACEMENTS: ModificationPhase;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ModificationPhase;
    static values(): ModificationPhase[];
    private constructor()
    name(): "ADDITIONS" | "REMOVALS" | "REPLACEMENTS" | "POST_PROCESSING";
}