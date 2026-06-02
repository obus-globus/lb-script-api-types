import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { MappingDataBase } from '../../../../../../com/viaversion/viaversion/api/data/MappingDataBase.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class MappingData26_1 extends MappingDataBase {
    constructor()
    // private catSoundVariants: Map$Entry<string, Tag>[];
    // private chickenSoundVariants: Map$Entry<string, Tag>[];
    // private cowSoundVariants: Map$Entry<string, Tag>[];
    // private fluidBlockStates: (Object | null)[];
    // private pigSoundVariants: Map$Entry<string, Tag>[];
    catSoundVariants(): Map$Entry<string, Tag>[];
    chickenSoundVariants(): Map$Entry<string, Tag>[];
    cowSoundVariants(): Map$Entry<string, Tag>[];
    fluidBlockStates(): (Object | null)[];
    loadExtras(arg0: Map$Entry<string, Tag>[]): void;
    pigSoundVariants(): Map$Entry<string, Tag>[];
}