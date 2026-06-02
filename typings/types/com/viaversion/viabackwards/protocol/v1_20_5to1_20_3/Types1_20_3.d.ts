import type { Particle } from '../../../../../com/viaversion/viaversion/api/minecraft/Particle.d.ts'
import type { StructuredData } from '../../../../../com/viaversion/viaversion/api/minecraft/data/StructuredData.d.ts'
import type { VersionedStructuredDataKeys } from '../../../../../com/viaversion/viaversion/api/minecraft/data/version/VersionedStructuredDataKeys.d.ts'
import type { EntityData } from '../../../../../com/viaversion/viaversion/api/minecraft/entitydata/EntityData.d.ts'
import type { AbstractEntityDataTypes } from '../../../../../com/viaversion/viaversion/api/minecraft/entitydata/types/AbstractEntityDataTypes.d.ts'
import type { Item } from '../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { Type } from '../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ArrayType } from '../../../../../com/viaversion/viaversion/api/type/types/ArrayType.d.ts'
import type { StructuredDataType } from '../../../../../com/viaversion/viaversion/api/type/types/item/StructuredDataType.d.ts'
import type { ParticleType } from '../../../../../com/viaversion/viaversion/api/type/types/misc/ParticleType.d.ts'
import type { VersionedTypesHolder } from '../../../../../com/viaversion/viaversion/api/type/types/version/VersionedTypesHolder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Types1_20_3 extends Object implements VersionedTypesHolder {
    constructor()
    entityDataList(): Type<EntityData[]>;
    entityDataTypes(): AbstractEntityDataTypes;
    item(): Type<Item>;
    itemArray(): Type<Item[]>;
    itemCost(): Type<Item>;
    itemTemplate(): Type<Item>;
    itemTemplateArray(): Type<Item[]>;
    lengthPrefixedItem(): Type<Item>;
    optionalItemCost(): Type<Item>;
    optionalItemTemplate(): Type<Item>;
    particle(): ParticleType;
    particles(): ArrayType<Particle>;
    structuredData(): StructuredDataType;
    structuredDataArray(): Type<StructuredData<Object>[]>;
    structuredDataKeys(): VersionedStructuredDataKeys;
}