import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { BiMappings } from '../../../../../../com/viaversion/viaversion/api/data/BiMappings.d.ts'
import type { MappingDataBase } from '../../../../../../com/viaversion/viaversion/api/data/MappingDataBase.d.ts'
import type { Mappings } from '../../../../../../com/viaversion/viaversion/api/data/Mappings.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class MappingData1_13 extends MappingDataBase {
    static validateNewChannel(paramarg0: string): string;
    constructor()
    readonly blockTags: { [key: string]: number[] };
    readonly channelMappings: { [key: string]: string };
    readonly fluidTags: { [key: string]: number[] };
    readonly itemTags: { [key: string]: number[] };
    readonly mojangTranslation: { [key: string]: string };
    readonly oldEnchantmentsIds: { [key: number]: string };
    readonly translateMapping: { [key: string]: string };
    getBlockTags(): { [key: string]: number[] };
    getChannelMappings(): { [key: string]: string };
    getFluidTags(): { [key: string]: number[] };
    getItemTags(): { [key: string]: number[] };
    getMojangTranslation(): { [key: string]: string };
    getOldEnchantmentsIds(): { [key: number]: string };
    getTranslateMapping(): { [key: string]: string };
    loadBiMappings(arg0: Map$Entry<string, Tag>[], arg1: string): BiMappings;
    // private loadEnchantments(arg0: { [key: number]: string }, arg1: Map$Entry<string, Tag>[]): void;
    loadExtras(arg0: Map$Entry<string, Tag>[]): void;
    loadMappings(arg0: Map$Entry<string, Tag>[], arg1: string): Mappings;
    // private loadTags(arg0: { [key: string]: number[] }, arg1: Map$Entry<string, Tag>[]): void;
}