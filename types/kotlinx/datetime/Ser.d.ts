import type { Externalizable } from '../../java/io/Externalizable.d.ts'
import type { ObjectInput } from '../../java/io/ObjectInput.d.ts'
import type { ObjectOutput } from '../../java/io/ObjectOutput.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Ser$Companion } from '../../kotlinx/datetime/Ser$Companion.d.ts'
export class Ser extends Object implements Externalizable {
    static Companion: Ser$Companion;
    static DATE_TAG: number;
    static DATE_TIME_TAG: number;
    static TIME_TAG: number;
    static UTC_OFFSET_TAG: number;
    static YEAR_MONTH_TAG: number;
    constructor()
    constructor(typeTag: number, value: Object | null)
    // private typeTag: number;
    // private value: Object | null;
    readExternal(in_: ObjectInput): void;
    // private readResolve(): Object;
    writeExternal(out: ObjectOutput): void;
}