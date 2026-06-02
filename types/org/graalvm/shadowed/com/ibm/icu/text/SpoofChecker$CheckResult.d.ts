import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { SpoofChecker$RestrictionLevel } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/SpoofChecker$RestrictionLevel.d.ts'
export class SpoofChecker$CheckResult extends Object {
    constructor()
    checks: number;
    numerics: string[];
    position: number;
    restrictionLevel: SpoofChecker$RestrictionLevel;
    toString(): string;
}