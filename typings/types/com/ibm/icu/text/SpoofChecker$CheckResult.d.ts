import type { SpoofChecker$RestrictionLevel } from '../../../../com/ibm/icu/text/SpoofChecker$RestrictionLevel.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SpoofChecker$CheckResult extends Object {
    constructor()
    checks: number;
    numerics: string[];
    position: number;
    restrictionLevel: SpoofChecker$RestrictionLevel;
    toString(): string;
}