import type { Externalizable } from '../../../../java/io/Externalizable.d.ts'
import type { ObjectInput } from '../../../../java/io/ObjectInput.d.ts'
import type { ObjectOutput } from '../../../../java/io/ObjectOutput.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MeasureUnit$MeasureUnitProxy extends Object implements Externalizable {
    constructor()
    constructor(arg0: string, arg1: string)
    // private subType: string;
    // private type: string;
    readExternal(arg0: ObjectInput): void;
    // private readResolve(): Object;
    writeExternal(arg0: ObjectOutput): void;
}