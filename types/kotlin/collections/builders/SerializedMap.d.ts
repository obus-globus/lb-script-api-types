import type { Externalizable } from '../../../java/io/Externalizable.d.ts'
import type { ObjectInput } from '../../../java/io/ObjectInput.d.ts'
import type { ObjectOutput } from '../../../java/io/ObjectOutput.d.ts'
import type { Serializable } from '../../../java/io/Serializable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { SerializedMap$Companion } from '../../../kotlin/collections/builders/SerializedMap$Companion.d.ts'
export class SerializedMap extends Object implements Externalizable, Serializable {
    static Companion: SerializedMap$Companion;
    constructor()
    constructor(map: Map<Object | null, Object | null>)
    // private map: Map<Object | null, Object | null>;
    readExternal(input: ObjectInput): void;
    // private readResolve(): Object;
    writeExternal(output: ObjectOutput): void;
}