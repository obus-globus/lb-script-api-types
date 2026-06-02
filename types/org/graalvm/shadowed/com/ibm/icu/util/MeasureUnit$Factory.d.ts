import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MeasureUnit } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/MeasureUnit.d.ts'
export interface MeasureUnit$Factory extends Object{
    create(type: string, subType: string): MeasureUnit;
}