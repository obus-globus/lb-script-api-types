import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { EntityData } from '../../../../../../com/viaversion/viaversion/api/minecraft/entitydata/EntityData.d.ts'
import type { PacketWrapper } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { UUID } from '../../../../../../java/util/UUID.d.ts'
import type { AtomicInteger } from '../../../../../../java/util/concurrent/atomic/AtomicInteger.d.ts'
import type { LivingEntity } from '../../../../../../net/raphimc/viabedrock/api/model/entity/LivingEntity.d.ts'
import type { EntityAttribute } from '../../../../../../net/raphimc/viabedrock/protocol/model/EntityAttribute.d.ts'
import type { PlayerAbilities } from '../../../../../../net/raphimc/viabedrock/protocol/model/PlayerAbilities.d.ts'
export class PlayerEntity extends LivingEntity {
    constructor(arg0: UserConnection, arg1: number, arg2: number, arg3: UUID, arg4: PlayerAbilities)
    abilities: PlayerAbilities;
    createTeam(): void;
    eyeOffset(): number;
    remove(): void;
    sendInitialEntityData(): void;
    setAbilities(arg0: PlayerAbilities): void;
    translateAttribute(arg0: EntityAttribute, arg1: PacketWrapper, arg2: AtomicInteger, arg3: EntityData[]): boolean;
    updateName(arg0: string): void;
}