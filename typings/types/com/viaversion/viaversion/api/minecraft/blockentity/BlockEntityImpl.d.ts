import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { BlockEntity } from '../../../../../../com/viaversion/viaversion/api/minecraft/blockentity/BlockEntity.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class BlockEntityImpl extends Record implements BlockEntity {
    constructor(packedXZ: number, y: number, typeId: number, tag: Map$Entry<string, Tag>[])
    // private packedXZ: number;
    // private tag: Map$Entry<string, Tag>[];
    // private typeId: number;
    // private y: number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    packedXZ(): number;
    sectionX(): number;
    sectionZ(): number;
    tag(): Map$Entry<string, Tag>[];
    toString(): string;
    typeId(): number;
    withTypeId(arg0: number): BlockEntity;
    y(): number;
}