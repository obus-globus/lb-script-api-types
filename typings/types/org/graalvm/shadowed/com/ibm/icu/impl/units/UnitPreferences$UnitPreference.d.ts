import type { BigDecimal } from '../../../../../../../../java/math/BigDecimal.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class UnitPreferences$UnitPreference extends Object {
    constructor(unit: string, geq: string, skeleton: string)
    readonly geq: BigDecimal;
    readonly skeleton: string;
    readonly unit: string;
    getGeq(): BigDecimal;
    getSkeleton(): string;
    getUnit(): string;
}