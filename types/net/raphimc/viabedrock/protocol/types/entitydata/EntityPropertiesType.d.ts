import type { Type } from '../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { EntityProperties } from '../../../../../../net/raphimc/viabedrock/protocol/model/EntityProperties.d.ts'
export class EntityPropertiesType extends Type<EntityProperties> {
    constructor()
    read(arg0: ByteBuf): EntityProperties;
    write(arg0: ByteBuf, arg1: EntityProperties): void;
}