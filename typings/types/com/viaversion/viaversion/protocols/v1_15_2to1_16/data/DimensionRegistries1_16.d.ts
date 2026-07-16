import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class DimensionRegistries1_16 extends Object {
    static getDimensionsTag(): Map$Entry<string, Tag>[];
    static getWorldNames(): string[];
    constructor()
}