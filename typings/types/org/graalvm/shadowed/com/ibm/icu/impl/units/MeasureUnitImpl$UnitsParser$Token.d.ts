import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { MeasureUnitImpl$InitialCompoundPart } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/units/MeasureUnitImpl$InitialCompoundPart.d.ts'
import type { MeasureUnitImpl$UnitsParser$Token$Type } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/impl/units/MeasureUnitImpl$UnitsParser$Token$Type.d.ts'
import type { MeasureUnit$MeasurePrefix } from '../../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/MeasureUnit$MeasurePrefix.d.ts'
export class MeasureUnitImpl$UnitsParser$Token extends Object {
    static tokenWithConstant(paramconstantStr: string): MeasureUnitImpl$UnitsParser$Token;
    constructor(fMatch: number)
    // private fMatch: number;
    readonly type: MeasureUnitImpl$UnitsParser$Token$Type;
    // private calculateType(fMatch: number): MeasureUnitImpl$UnitsParser$Token$Type;
    getAliasIndex(): number;
    getConstantDenominator(): number;
    getInitialCompoundPart(): MeasureUnitImpl$InitialCompoundPart;
    getMatch(): number;
    getPower(): number;
    getPrefix(): MeasureUnit$MeasurePrefix;
    getSimpleUnitIndex(): number;
    getType(): MeasureUnitImpl$UnitsParser$Token$Type;
}