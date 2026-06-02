import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export interface BlockEntity extends Object{
    packedXZ(): number;
    sectionX(): number;
    sectionZ(): number;
    tag(): Map$Entry<string, Tag>[];
    typeId(): number;
    withTypeId(arg0: number): BlockEntity;
    y(): number;
}