import type { Externalizable } from '../../../../../../../../java/io/Externalizable.d.ts'
import type { ObjectInput } from '../../../../../../../../java/io/ObjectInput.d.ts'
import type { ObjectOutput } from '../../../../../../../../java/io/ObjectOutput.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class LocalizedNumberFormatterAsFormat$Proxy extends Object implements Externalizable {
    constructor()
    // private languageTag: string;
    // private skeleton: string;
    readExternal(in_: ObjectInput): void;
    // private readResolve(): Object;
    writeExternal(out: ObjectOutput): void;
}