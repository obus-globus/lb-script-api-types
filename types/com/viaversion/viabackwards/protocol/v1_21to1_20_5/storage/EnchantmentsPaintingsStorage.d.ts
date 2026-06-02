import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { KeyMappings } from '../../../../../../com/viaversion/viaversion/util/KeyMappings.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class EnchantmentsPaintingsStorage extends Object implements StorableObject {
    constructor()
    // private enchantmentDescriptions: Tag[];
    // private enchantmentMaxLevels: number[];
    // private enchantments: KeyMappings;
    readonly jubeboxSongsToItems: number[];
    // private paintingMappings: number[];
    // private paintings: KeyMappings;
    enchantmentDescription(arg0: number): Tag;
    enchantmentMaxLevel(arg0: number): number;
    enchantments(): KeyMappings;
    jubeboxSongToItem(arg0: number): number;
    mappedPainting(arg0: number): number;
    onRemove(): void;
    paintings(): KeyMappings;
    setEnchantments(arg0: KeyMappings, arg1: Tag[], arg2: number[]): void;
    setJubeboxSongsToItems(arg0: number[]): void;
    setPaintings(arg0: KeyMappings, arg1: number[]): void;
}