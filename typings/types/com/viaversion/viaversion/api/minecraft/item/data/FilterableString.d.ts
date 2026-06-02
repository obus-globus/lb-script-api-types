import type { Filterable } from '../../../../../../../com/viaversion/viaversion/api/minecraft/item/data/Filterable.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class FilterableString extends Filterable<string> {
    static ARRAY_TYPE: Type<(Object | null)[]>;
    static TYPE: Type<FilterableString>;
    constructor(arg0: string, arg1: string)
}