import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { OverridingUtil$OverrideCompatibilityInfo$Result } from '../../../../../../kotlin/reflect/jvm/internal/impl/resolve/OverridingUtil$OverrideCompatibilityInfo$Result.d.ts'
export class OverridingUtil$OverrideCompatibilityInfo extends Object {
    static conflict(paramarg0: string): OverridingUtil$OverrideCompatibilityInfo;
    static incompatible(paramarg0: string): OverridingUtil$OverrideCompatibilityInfo;
    static success(): OverridingUtil$OverrideCompatibilityInfo;
    constructor(arg0: OverridingUtil$OverrideCompatibilityInfo$Result, arg1: string)
    // private debugMessage: string;
    // private overridable: OverridingUtil$OverrideCompatibilityInfo$Result;
    getResult(): OverridingUtil$OverrideCompatibilityInfo$Result;
    toString(): string;
}