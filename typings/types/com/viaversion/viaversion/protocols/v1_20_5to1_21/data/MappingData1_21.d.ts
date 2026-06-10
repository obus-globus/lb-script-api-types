import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { MappingDataBase } from '../../../../../../com/viaversion/viaversion/api/data/MappingDataBase.d.ts'
import type { RegistryEntry } from '../../../../../../com/viaversion/viaversion/api/minecraft/RegistryEntry.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class MappingData1_21 extends MappingDataBase {
    constructor()
    // private enchantments: Map$Entry<string, Tag>[][];
    // private jukeboxSongs: Map$Entry<string, Tag>[];
    enchantment(arg0: number): Map$Entry<string, Tag>[];
    jukeboxSongs(): RegistryEntry[];
    loadExtras(arg0: Map$Entry<string, Tag>[]): void;
}