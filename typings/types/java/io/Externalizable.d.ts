import type { ObjectInput } from '../../java/io/ObjectInput.d.ts'
import type { ObjectOutput } from '../../java/io/ObjectOutput.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface Externalizable extends Serializable, Object{
    readExternal(arg0: ObjectInput): void;
    writeExternal(arg0: ObjectOutput): void;
}