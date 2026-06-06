import type { VersionedStructuredDataKeys } from '../../../../../../../com/viaversion/viaversion/api/minecraft/data/version/VersionedStructuredDataKeys.d.ts'
import type { AbstractEntityDataTypes } from '../../../../../../../com/viaversion/viaversion/api/minecraft/entitydata/types/AbstractEntityDataTypes.d.ts'
import type { Item } from '../../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Types1_20_5 } from '../../../../../../../com/viaversion/viaversion/api/type/types/version/Types1_20_5.d.ts'
import type { VersionedTypesHolder } from '../../../../../../../com/viaversion/viaversion/api/type/types/version/VersionedTypesHolder.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
export class Types26_1<K extends VersionedStructuredDataKeys, E extends AbstractEntityDataTypes> extends Types1_20_5<K, E> {
    constructor(arg0: (param0: VersionedTypesHolder) => K, arg1: (param0: VersionedTypesHolder) => E)
    itemTemplate: Type<Item>;
    itemTemplateArray: Type<Item[]>;
    optionalItemTemplate: Type<Item>;
}