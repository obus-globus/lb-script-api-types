import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../../../../java/lang/Number.d.ts'
import type { MeasureUnit } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/MeasureUnit.d.ts'
export class Measure extends Object {
    constructor(number: Number, unit: MeasureUnit)
    readonly number: Number;
    readonly unit: MeasureUnit;
    equals(obj: Object | null): boolean;
    getNumber(): Number;
    getUnit(): MeasureUnit;
    hashCode(): number;
    toString(): string;
}