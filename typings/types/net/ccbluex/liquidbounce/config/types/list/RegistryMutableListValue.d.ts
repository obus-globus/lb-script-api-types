import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ValueType } from '../../../../../../net/ccbluex/liquidbounce/config/types/ValueType.d.ts'
import type { ListValue } from '../../../../../../net/ccbluex/liquidbounce/config/types/list/ListValue.d.ts'
export class RegistryMutableListValue<T extends E[], E extends Object | number | string | boolean> extends ListValue<T, E> {
    constructor(name: string, value: T, innerValueType: ValueType, innerType: Class<E>)
    readonly registry: string;
}