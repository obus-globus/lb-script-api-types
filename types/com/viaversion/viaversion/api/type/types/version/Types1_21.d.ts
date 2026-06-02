import type { StructuredDataKeys1_20_5 } from '../../../../../../../com/viaversion/viaversion/api/minecraft/data/version/StructuredDataKeys1_20_5.d.ts'
import type { EntityDataTypes1_21 } from '../../../../../../../com/viaversion/viaversion/api/minecraft/entitydata/types/EntityDataTypes1_21.d.ts'
import type { Item } from '../../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Types1_20_5 } from '../../../../../../../com/viaversion/viaversion/api/type/types/version/Types1_20_5.d.ts'
import type { VersionedTypesHolder } from '../../../../../../../com/viaversion/viaversion/api/type/types/version/VersionedTypesHolder.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
export class Types1_21 extends Types1_20_5<StructuredDataKeys1_20_5, EntityDataTypes1_21> {
    constructor(arg0: (param0: VersionedTypesHolder) => StructuredDataKeys1_20_5, arg1: (param0: VersionedTypesHolder) => EntityDataTypes1_21)
    optionalItem: Type<Item>;
}