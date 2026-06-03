import type { Ops } from '../../../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops.d.ts'
import type { EntityData } from '../../../../../../../com/viaversion/viaversion/api/minecraft/entitydata/EntityData.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { EntityDataListTypeTemplate } from '../../../../../../../com/viaversion/viaversion/api/type/types/entitydata/EntityDataListTypeTemplate.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
export class EntityDataListType extends EntityDataListTypeTemplate {
    constructor(arg0: Type<EntityData>)
    // private type: Type<EntityData>;
    read(arg0: ByteBuf): EntityData[];
    write(arg0: Ops, arg1: EntityData[]): void;
    write(arg0: ByteBuf, arg1: EntityData[]): void;
}