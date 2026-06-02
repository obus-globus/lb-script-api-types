import type { BigDecimal } from '../../../../../java/math/BigDecimal.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class UnitPreferences$UnitPreference extends Object {
    constructor(arg0: string, arg1: string, arg2: string)
    readonly geq: BigDecimal;
    readonly skeleton: string;
    readonly unit: string;
    getGeq(): BigDecimal;
    getSkeleton(): string;
    getUnit(): string;
}