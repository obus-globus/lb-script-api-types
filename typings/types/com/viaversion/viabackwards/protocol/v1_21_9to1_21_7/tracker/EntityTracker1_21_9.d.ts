import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { TrackedEntity } from '../../../../../../com/viaversion/viaversion/api/data/entity/TrackedEntity.d.ts'
import type { EntityType } from '../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { EntityTrackerBase } from '../../../../../../com/viaversion/viaversion/data/entity/EntityTrackerBase.d.ts'
export class EntityTracker1_21_9 extends EntityTrackerBase {
    constructor(arg0: UserConnection, arg1: EntityType)
    removeEntity(arg0: number): TrackedEntity;
    sendRemovePacket(arg0: TrackedEntity): void;
}