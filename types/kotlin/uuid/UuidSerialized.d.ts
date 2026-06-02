import type { Externalizable } from '../../java/io/Externalizable.d.ts'
import type { ObjectInput } from '../../java/io/ObjectInput.d.ts'
import type { ObjectOutput } from '../../java/io/ObjectOutput.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { UuidSerialized$Companion } from '../../kotlin/uuid/UuidSerialized$Companion.d.ts'
export class UuidSerialized extends Object implements Externalizable, Serializable {
    static Companion: UuidSerialized$Companion;
    constructor()
    constructor(mostSignificantBits: number, leastSignificantBits: number)
    leastSignificantBits: number;
    mostSignificantBits: number;
    readExternal(input: ObjectInput): void;
    // private readResolve(): Object;
    writeExternal(output: ObjectOutput): void;
}