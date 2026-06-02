import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { MappingDataBase } from '../../../../../../com/viaversion/viaversion/api/data/MappingDataBase.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class MappingData1_20_5 extends MappingDataBase {
    constructor()
    // private damageTypes: { [key: string]: Map$Entry<string, Tag>[] };
    blockId(arg0: string): number;
    blockName(arg0: number): string;
    damageKeys(): string[];
    damageType(arg0: string): Map$Entry<string, Tag>[];
    loadExtras(arg0: Map$Entry<string, Tag>[]): void;
    soundId(arg0: string): number;
    soundName(arg0: number): string;
}