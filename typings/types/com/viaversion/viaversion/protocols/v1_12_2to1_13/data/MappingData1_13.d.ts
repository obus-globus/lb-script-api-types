import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { BiMappings } from '../../../../../../com/viaversion/viaversion/api/data/BiMappings.d.ts'
import type { MappingDataBase } from '../../../../../../com/viaversion/viaversion/api/data/MappingDataBase.d.ts'
import type { Mappings } from '../../../../../../com/viaversion/viaversion/api/data/Mappings.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class MappingData1_13 extends MappingDataBase {
    static validateNewChannel(paramarg0: string): string;
    constructor()
    readonly blockTags: JavaMap<string, number[]>;
    readonly channelMappings: JavaMap<string, string>;
    readonly fluidTags: JavaMap<string, number[]>;
    readonly itemTags: JavaMap<string, number[]>;
    readonly mojangTranslation: JavaMap<string, string>;
    readonly oldEnchantmentsIds: JavaMap<number, string>;
    readonly translateMapping: JavaMap<string, string>;
    getBlockTags(): JavaMap<string, number[]>;
    getChannelMappings(): JavaMap<string, string>;
    getFluidTags(): JavaMap<string, number[]>;
    getItemTags(): JavaMap<string, number[]>;
    getMojangTranslation(): JavaMap<string, string>;
    getOldEnchantmentsIds(): JavaMap<number, string>;
    getTranslateMapping(): JavaMap<string, string>;
    loadBiMappings(arg0: Map$Entry<string, Tag>[], arg1: string): BiMappings;
    // private loadEnchantments(arg0: JavaMap<number, string>, arg1: Map$Entry<string, Tag>[]): void;
    loadExtras(arg0: Map$Entry<string, Tag>[]): void;
    loadMappings(arg0: Map$Entry<string, Tag>[], arg1: string): Mappings;
    // private loadTags(arg0: JavaMap<string, number[]>, arg1: Map$Entry<string, Tag>[]): void;
}