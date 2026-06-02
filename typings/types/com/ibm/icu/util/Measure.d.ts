import type { MeasureUnit } from '../../../../com/ibm/icu/util/MeasureUnit.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../java/lang/Number.d.ts'
export class Measure extends Object {
    constructor(arg0: Number, arg1: MeasureUnit)
    readonly number: Number;
    readonly unit: MeasureUnit;
    equals(arg0: Object | null): boolean;
    getNumber(): Number;
    getUnit(): MeasureUnit;
    hashCode(): number;
    toString(): string;
}