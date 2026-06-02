import type { Externalizable } from '../../java/io/Externalizable.d.ts'
import type { ObjectInput } from '../../java/io/ObjectInput.d.ts'
import type { ObjectOutput } from '../../java/io/ObjectOutput.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { InstantSerialized$Companion } from '../../kotlin/time/InstantSerialized$Companion.d.ts'
export class InstantSerialized extends Object implements Externalizable, Serializable {
    static Companion: InstantSerialized$Companion;
    constructor()
    constructor(epochSeconds: number, nanosecondsOfSecond: number)
    epochSeconds: number;
    nanosecondsOfSecond: number;
    readExternal(input: ObjectInput): void;
    // private readResolve(): Object;
    writeExternal(output: ObjectOutput): void;
}