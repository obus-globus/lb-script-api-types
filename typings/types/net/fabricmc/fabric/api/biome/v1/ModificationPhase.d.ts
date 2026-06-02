import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class ModificationPhase extends Enum<ModificationPhase> {
    static ADDITIONS: ModificationPhase;
    static POST_PROCESSING: ModificationPhase;
    static REMOVALS: ModificationPhase;
    static REPLACEMENTS: ModificationPhase;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModificationPhase;
    static values(): (Object | null)[];
    private constructor()
    name(): "ADDITIONS" | "REMOVALS" | "REPLACEMENTS" | "POST_PROCESSING";
}