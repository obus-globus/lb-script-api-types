import type { Ops } from '../../../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops.d.ts'
import type { EntityData } from '../../../../../../../com/viaversion/viaversion/api/minecraft/entitydata/EntityData.d.ts'
import type { EntityDataType } from '../../../../../../../com/viaversion/viaversion/api/minecraft/entitydata/EntityDataType.d.ts'
import type { EntityDataTypeTemplate } from '../../../../../../../com/viaversion/viaversion/api/type/types/entitydata/EntityDataTypeTemplate.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
export abstract class ModernEntityDataType extends EntityDataTypeTemplate {
    constructor()
    getType(arg0: number): EntityDataType;
    read(arg0: ByteBuf): EntityData;
    write(arg0: Ops, arg1: EntityData): void;
    write(arg0: ByteBuf, arg1: EntityData): void;
}