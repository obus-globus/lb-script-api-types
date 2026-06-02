import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class ImmutableEnumSet$EnumSerializedForm<E extends Enum<E>> extends Object implements Serializable {
    constructor(delegate: E[])
    // private delegate: E[];
    readResolve(): Object;
}