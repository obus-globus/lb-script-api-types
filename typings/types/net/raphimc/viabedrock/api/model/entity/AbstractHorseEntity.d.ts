import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { EntityTypes1_21_11 } from '../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityTypes1_21_11.d.ts'
import type { EntityData } from '../../../../../../com/viaversion/viaversion/api/minecraft/entitydata/EntityData.d.ts'
import type { PacketWrapper } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { UUID } from '../../../../../../java/util/UUID.d.ts'
import type { AtomicInteger } from '../../../../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { MobEntity } from '../../../../../../net/raphimc/viabedrock/api/model/entity/MobEntity.d.ts'
import type { EntityAttribute } from '../../../../../../net/raphimc/viabedrock/protocol/model/EntityAttribute.d.ts'
export class AbstractHorseEntity extends MobEntity {
    constructor(arg0: UserConnection, arg1: number, arg2: number, arg3: string, arg4: number, arg5: UUID, arg6: EntityTypes1_21_11)
    translateAttribute(arg0: EntityAttribute, arg1: PacketWrapper, arg2: AtomicInteger, arg3: EntityData[]): boolean;
}