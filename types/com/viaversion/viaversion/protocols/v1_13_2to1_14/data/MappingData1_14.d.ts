import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { MappingDataBase } from '../../../../../../com/viaversion/viaversion/api/data/MappingDataBase.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class MappingData1_14 extends MappingDataBase {
    constructor()
    readonly motionBlocking: (Object | null)[];
    readonly nonFullBlocks: (Object | null)[];
    getMotionBlocking(): (Object | null)[];
    getNonFullBlocks(): (Object | null)[];
    loadExtras(arg0: Map$Entry<string, Tag>[]): void;
}