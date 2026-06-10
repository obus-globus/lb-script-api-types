import type { StringTag } from '../../../../../../com/viaversion/nbt/tag/StringTag.d.ts'
import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { StructuredData } from '../../../../../../com/viaversion/viaversion/api/minecraft/data/StructuredData.d.ts'
import type { StructuredDataKey } from '../../../../../../com/viaversion/viaversion/api/minecraft/data/StructuredDataKey.d.ts'
import type { Item } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { AdventureModePredicate } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/data/AdventureModePredicate.d.ts'
import type { BlockPredicate } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/data/BlockPredicate.d.ts'
import type { Enchantments } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/data/Enchantments.d.ts'
import type { FireworkExplosion } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/data/FireworkExplosion.d.ts'
import type { PotionEffectData } from '../../../../../../com/viaversion/viaversion/api/minecraft/item/data/PotionEffectData.d.ts'
import type { StructuredDataConverter$DataConverter } from '../../../../../../com/viaversion/viaversion/protocols/v1_20_3to1_20_5/rewriter/StructuredDataConverter$DataConverter.d.ts'
import type { StructuredDataConverter$SimpleDataConverter } from '../../../../../../com/viaversion/viaversion/protocols/v1_20_3to1_20_5/rewriter/StructuredDataConverter$SimpleDataConverter.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class StructuredDataConverter extends Object {
    static removeBackupTag(paramarg0: Map$Entry<string, Tag>[]): Map$Entry<string, Tag>[];
    constructor(arg0: boolean)
    // private backupInconvertibleData: boolean;
    // private rewriters: Map<StructuredDataKey<Object>, (param0: UserConnection, param1: Object | null, param2: Map$Entry<string, Tag>[]) => void>;
    backupInconvertibleData(): boolean;
    // private convertBlockPredicates(arg0: Map$Entry<string, Tag>[], arg1: AdventureModePredicate, arg2: string, arg3: number): void;
    // private convertEnchantments(arg0: Enchantments, arg1: Map$Entry<string, Tag>[], arg2: boolean): void;
    // private convertExplosion(arg0: FireworkExplosion): Map$Entry<string, Tag>[];
    // private convertItemList(arg0: UserConnection, arg1: Item[], arg2: Map$Entry<string, Tag>[], arg3: string): void;
    // private convertPotionEffectData(arg0: PotionEffectData): Map$Entry<string, Tag>[];
    // private getBlockEntityTag(arg0: Map$Entry<string, Tag>[], arg1: string): Map$Entry<string, Tag>[];
    // private itemToTag(arg0: UserConnection, arg1: Item): Map$Entry<string, Tag>[];
    // private putHideFlag(arg0: Map$Entry<string, Tag>[], arg1: number): void;
    // private register<T extends Object | number | string | boolean>(arg0: StructuredDataKey<T>, arg1: (param0: UserConnection, param1: T, param2: Map$Entry<string, Tag>[]) => void): void;
    // private register<T extends Object | number | string | boolean>(arg0: StructuredDataKey<T>, arg1: (param0: T, param1: Map$Entry<string, Tag>[]) => void): void;
    // private serializeBlockPredicate(arg0: BlockPredicate, arg1: string): StringTag;
    // private toMappedItemName(arg0: number): string;
    // private unmappedItemId(arg0: number): number;
    writeToTag<T extends Object | number | string | boolean>(arg0: UserConnection, arg1: StructuredData<T>, arg2: Map$Entry<string, Tag>[]): void;
}