import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { KMutableProperty1 } from '../../../../../../../kotlin/reflect/KMutableProperty1.d.ts'
import type { KProperty } from '../../../../../../../kotlin/reflect/KProperty.d.ts'
import type { FlagImpl } from '../../../../../../../kotlin/reflect/jvm/internal/impl/km/internal/FlagImpl.d.ts'
export class BooleanFlagDelegate<Node extends Object | number | string | boolean> extends Object {
    constructor(arg0: KMutableProperty1<Node, number>, arg1: FlagImpl)
    // private flag: FlagImpl;
    // private flags: KMutableProperty1<Node, number>;
    // private mask: number;
    getValue(arg0: Node, arg1: KProperty<Object>): boolean;
    setValue(arg0: Node, arg1: KProperty<Object>, arg2: boolean): void;
}