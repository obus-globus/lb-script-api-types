import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class LanguageAdapter$MissingSuperclassBehavior extends Enum<LanguageAdapter$MissingSuperclassBehavior> {
    static CRASH: LanguageAdapter$MissingSuperclassBehavior;
    static RETURN_NULL: LanguageAdapter$MissingSuperclassBehavior;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): LanguageAdapter$MissingSuperclassBehavior;
    static values(): (Object | null)[];
    private constructor()
    name(): "RETURN_NULL" | "CRASH";
}