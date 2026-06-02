import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { KMutableProperty1 } from '../../../../../../../kotlin/reflect/KMutableProperty1.d.ts'
import type { KProperty } from '../../../../../../../kotlin/reflect/KProperty.d.ts'
import type { FlagImpl } from '../../../../../../../kotlin/reflect/jvm/internal/impl/km/internal/FlagImpl.d.ts'
import type { Flags$FlagField } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/Flags$FlagField.d.ts'
import type { Internal$EnumLite } from '../../../../../../../kotlin/reflect/jvm/internal/impl/protobuf/Internal$EnumLite.d.ts'
export class EnumFlagDelegate<Node extends Object | number | string | boolean, E extends Enum<E>> extends Object {
    constructor(arg0: KMutableProperty1<Node, number>, arg1: Flags$FlagField<Internal$EnumLite>, arg2: E[], arg3: FlagImpl[])
    // private entries: E[];
    // private flagValues: FlagImpl[];
    // private flags: KMutableProperty1<Node, number>;
    // private protoSet: Flags$FlagField<Internal$EnumLite>;
    getValue(arg0: Node, arg1: KProperty<Object>): E;
    setValue(arg0: Node, arg1: KProperty<Object>, arg2: E): void;
}