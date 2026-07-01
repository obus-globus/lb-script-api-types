import type { MeasureUnitImpl$InitialCompoundPart } from '../../../../../com/ibm/icu/impl/units/MeasureUnitImpl$InitialCompoundPart.d.ts'
import type { MeasureUnitImpl$UnitsParser$Token$Type } from '../../../../../com/ibm/icu/impl/units/MeasureUnitImpl$UnitsParser$Token$Type.d.ts'
import type { MeasureUnit$MeasurePrefix } from '../../../../../com/ibm/icu/util/MeasureUnit$MeasurePrefix.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class MeasureUnitImpl$UnitsParser$Token extends Object {
    static tokenWithConstant(paramarg0: string): MeasureUnitImpl$UnitsParser$Token;
    constructor(arg0: number)
    // private fMatch: number;
    readonly type: MeasureUnitImpl$UnitsParser$Token$Type;
    // private calculateType(arg0: number): MeasureUnitImpl$UnitsParser$Token$Type;
    getAliasIndex(): number;
    getConstantDenominator(): number;
    getInitialCompoundPart(): MeasureUnitImpl$InitialCompoundPart;
    getMatch(): number;
    getPower(): number;
    getPrefix(): MeasureUnit$MeasurePrefix;
    getSimpleUnitIndex(): number;
    getType(): MeasureUnitImpl$UnitsParser$Token$Type;
}