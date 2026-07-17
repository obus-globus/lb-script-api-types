import type { Tag } from '../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { BlockPosition } from '../../../../../com/viaversion/viaversion/api/minecraft/BlockPosition.d.ts'
import type { BlockEntity } from '../../../../../com/viaversion/viaversion/api/minecraft/blockentity/BlockEntity.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class BedrockBlockEntity extends Object implements BlockEntity {
    constructor(arg0: Map$Entry<string, Tag>[])
    constructor(arg0: BlockPosition, arg1: Map$Entry<string, Tag>[])
    // private position: BlockPosition;
    // private tag: Map$Entry<string, Tag>[];
    packedXZ(): number;
    position(): BlockPosition;
    sectionX(): number;
    sectionZ(): number;
    tag(): Map$Entry<string, Tag>[];
    typeId(): number;
    withTypeId(arg0: number): BlockEntity;
    y(): number;
}