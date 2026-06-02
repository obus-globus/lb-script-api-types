import type { Externalizable } from '../../../../../../../java/io/Externalizable.d.ts'
import type { ObjectInput } from '../../../../../../../java/io/ObjectInput.d.ts'
import type { ObjectOutput } from '../../../../../../../java/io/ObjectOutput.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MeasureFormat$FormatWidth } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/MeasureFormat$FormatWidth.d.ts'
import type { NumberFormat } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/NumberFormat.d.ts'
import type { TimeUnitFormat } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/text/TimeUnitFormat.d.ts'
import type { ULocale } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/util/ULocale.d.ts'
export class MeasureFormat$MeasureProxy extends Object implements Externalizable {
    constructor()
    constructor(locale: ULocale, width: MeasureFormat$FormatWidth, numberFormat: NumberFormat, subClass: number)
    // private formatWidth: MeasureFormat$FormatWidth;
    // private keyValues: Map<Object, Object>;
    // private locale: ULocale;
    // private numberFormat: NumberFormat;
    // private subClass: number;
    // private createTimeUnitFormat(): TimeUnitFormat;
    readExternal(in_: ObjectInput): void;
    // private readResolve(): Object;
    writeExternal(out: ObjectOutput): void;
}