import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class ImmutableEnumMap$EnumSerializedForm<K extends Enum<K>, V extends unknown> extends Object implements Serializable {
    constructor(delegate: JavaMap<K, V>)
    // private delegate: JavaMap<K, V>;
    readResolve(): Object;
}