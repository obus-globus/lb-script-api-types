import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class SpoofChecker$RestrictionLevel extends Enum<SpoofChecker$RestrictionLevel> {
    static ASCII: SpoofChecker$RestrictionLevel;
    static HIGHLY_RESTRICTIVE: SpoofChecker$RestrictionLevel;
    static MINIMALLY_RESTRICTIVE: SpoofChecker$RestrictionLevel;
    static MODERATELY_RESTRICTIVE: SpoofChecker$RestrictionLevel;
    static SINGLE_SCRIPT_RESTRICTIVE: SpoofChecker$RestrictionLevel;
    static UNRESTRICTIVE: SpoofChecker$RestrictionLevel;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): SpoofChecker$RestrictionLevel;
    static values(): SpoofChecker$RestrictionLevel[];
    private constructor()
    name(): "ASCII" | "SINGLE_SCRIPT_RESTRICTIVE" | "HIGHLY_RESTRICTIVE" | "MODERATELY_RESTRICTIVE" | "MINIMALLY_RESTRICTIVE" | "UNRESTRICTIVE";
}