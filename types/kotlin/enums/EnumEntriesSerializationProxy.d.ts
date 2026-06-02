import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Class } from '../../java/lang/Class.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class EnumEntriesSerializationProxy<E extends Enum<E>> extends Object implements Serializable {
    constructor(entries: E[])
    // private c: Class<E>;
    // private readResolve(): Object;
}