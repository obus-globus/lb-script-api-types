import type { Particle } from '../../../../../../../com/viaversion/viaversion/api/minecraft/Particle.d.ts'
import type { StructuredData } from '../../../../../../../com/viaversion/viaversion/api/minecraft/data/StructuredData.d.ts'
import type { VersionedStructuredDataKeys } from '../../../../../../../com/viaversion/viaversion/api/minecraft/data/version/VersionedStructuredDataKeys.d.ts'
import type { EntityData } from '../../../../../../../com/viaversion/viaversion/api/minecraft/entitydata/EntityData.d.ts'
import type { AbstractEntityDataTypes } from '../../../../../../../com/viaversion/viaversion/api/minecraft/entitydata/types/AbstractEntityDataTypes.d.ts'
import type { Item } from '../../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ArrayType } from '../../../../../../../com/viaversion/viaversion/api/type/types/ArrayType.d.ts'
import type { LengthPrefixedStructuredDataType } from '../../../../../../../com/viaversion/viaversion/api/type/types/item/LengthPrefixedStructuredDataType.d.ts'
import type { StructuredDataType } from '../../../../../../../com/viaversion/viaversion/api/type/types/item/StructuredDataType.d.ts'
import type { ParticleType } from '../../../../../../../com/viaversion/viaversion/api/type/types/misc/ParticleType.d.ts'
import type { VersionedTypesHolder } from '../../../../../../../com/viaversion/viaversion/api/type/types/version/VersionedTypesHolder.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class Types1_20_5<K extends VersionedStructuredDataKeys, E extends AbstractEntityDataTypes> extends Object implements VersionedTypesHolder {
    constructor(arg0: (param0: VersionedTypesHolder) => K, arg1: (param0: VersionedTypesHolder) => E)
    entityData: Type<EntityData>;
    entityDataList: Type<EntityData[]>;
    entityDataTypes: E;
    item: Type<Item>;
    itemArray: Type<Item[]>;
    itemCost: Type<Item>;
    lengthPrefixedItem: Type<Item>;
    lengthPrefixedStructuredData: LengthPrefixedStructuredDataType;
    optionalItemCost: Type<Item>;
    particle: ParticleType;
    particles: ArrayType<Particle>;
    structuredData: StructuredDataType;
    structuredDataArray: Type<StructuredData<Object>[]>;
    // private structuredDataKeys: K;
    initKeys(arg0: (param0: VersionedTypesHolder) => K): void;
    itemTemplate(): Type<Item>;
    itemTemplateArray(): Type<Item[]>;
    optionalItemTemplate(): Type<Item>;
    structuredDataKeys(): K;
}