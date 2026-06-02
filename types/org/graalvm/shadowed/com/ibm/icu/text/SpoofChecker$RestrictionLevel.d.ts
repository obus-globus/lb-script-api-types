import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class SpoofChecker$RestrictionLevel extends Enum<SpoofChecker$RestrictionLevel> {
    static ASCII: SpoofChecker$RestrictionLevel;
    static HIGHLY_RESTRICTIVE: SpoofChecker$RestrictionLevel;
    static MINIMALLY_RESTRICTIVE: SpoofChecker$RestrictionLevel;
    static MODERATELY_RESTRICTIVE: SpoofChecker$RestrictionLevel;
    static SINGLE_SCRIPT_RESTRICTIVE: SpoofChecker$RestrictionLevel;
    static UNRESTRICTIVE: SpoofChecker$RestrictionLevel;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): SpoofChecker$RestrictionLevel;
    static values(): (Object | null)[];
    private constructor()
    name(): "ASCII" | "SINGLE_SCRIPT_RESTRICTIVE" | "HIGHLY_RESTRICTIVE" | "MODERATELY_RESTRICTIVE" | "MINIMALLY_RESTRICTIVE" | "UNRESTRICTIVE";
}