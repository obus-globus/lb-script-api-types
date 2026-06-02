import type { Tag } from '../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { BlockEntity } from '../../../../../com/viaversion/viaversion/api/minecraft/blockentity/BlockEntity.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class BlockEntityWithBlockState extends Object implements BlockEntity {
    static pack(paramarg0: number, paramarg1: number): number;
    constructor(arg0: BlockEntity, arg1: number)
    constructor(arg0: number, arg1: number, arg2: number)
    // private blockEntity: BlockEntity;
    // private blockState: number;
    blockState(): number;
    packedXZ(): number;
    sectionX(): number;
    sectionZ(): number;
    tag(): Map$Entry<string, Tag>[];
    typeId(): number;
    withTypeId(arg0: number): BlockEntity;
    y(): number;
}