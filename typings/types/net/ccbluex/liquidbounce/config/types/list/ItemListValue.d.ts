import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ValueType } from '../../../../../../net/ccbluex/liquidbounce/config/types/ValueType.d.ts'
import type { ItemListValue$NamedItem } from '../../../../../../net/ccbluex/liquidbounce/config/types/list/ItemListValue$NamedItem.d.ts'
import type { ListValue } from '../../../../../../net/ccbluex/liquidbounce/config/types/list/ListValue.d.ts'
export class ItemListValue<T extends E[], E extends unknown> extends ListValue<T, E> {
    constructor(name: string, value: T, items: ItemListValue$NamedItem<E>[], innerValueType: ValueType, innerType: Class<E>)
    items: ItemListValue$NamedItem<E>[];
}