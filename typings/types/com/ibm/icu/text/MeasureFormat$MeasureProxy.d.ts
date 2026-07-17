import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { MeasureFormat$FormatWidth } from '../../../../com/ibm/icu/text/MeasureFormat$FormatWidth.d.ts'
import type { NumberFormat } from '../../../../com/ibm/icu/text/NumberFormat.d.ts'
import type { TimeUnitFormat } from '../../../../com/ibm/icu/text/TimeUnitFormat.d.ts'
import type { ULocale } from '../../../../com/ibm/icu/util/ULocale.d.ts'
import type { Externalizable } from '../../../../java/io/Externalizable.d.ts'
import type { ObjectInput } from '../../../../java/io/ObjectInput.d.ts'
import type { ObjectOutput } from '../../../../java/io/ObjectOutput.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MeasureFormat$MeasureProxy extends Object implements Externalizable {
    constructor()
    constructor(arg0: ULocale, arg1: MeasureFormat$FormatWidth, arg2: NumberFormat, arg3: number)
    // private formatWidth: MeasureFormat$FormatWidth;
    // private keyValues: JavaMap<Object, Object>;
    // private locale: ULocale;
    // private numberFormat: NumberFormat;
    // private subClass: number;
    // private createTimeUnitFormat(): TimeUnitFormat;
    readExternal(arg0: ObjectInput): void;
    // private readResolve(): Object;
    writeExternal(arg0: ObjectOutput): void;
}