import type { Externalizable } from '../../../java/io/Externalizable.d.ts'
import type { ObjectInput } from '../../../java/io/ObjectInput.d.ts'
import type { ObjectOutput } from '../../../java/io/ObjectOutput.d.ts'
import type { Serializable } from '../../../java/io/Serializable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { SerializedCollection$Companion } from '../../../kotlin/collections/builders/SerializedCollection$Companion.d.ts'
export class SerializedCollection extends Object implements Externalizable, Serializable {
    static Companion: SerializedCollection$Companion;
    static tagList: number;
    static tagSet: number;
    constructor()
    constructor(collection: E[], tag: number)
    // private collection: E[];
    // private tag: number;
    readExternal(input: ObjectInput): void;
    // private readResolve(): Object;
    writeExternal(output: ObjectOutput): void;
}