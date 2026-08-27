import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { EntityType } from '../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityType.d.ts'
import type { EntityTrackerBase } from '../../../../../../com/viaversion/viaversion/data/entity/EntityTrackerBase.d.ts'
import type { EntityTracker1_21_2$BoatEntity } from '../../../../../../com/viaversion/viaversion/protocols/v1_21to1_21_2/storage/EntityTracker1_21_2$BoatEntity.d.ts'
import type { UUID } from '../../../../../../java/util/UUID.d.ts'
export class EntityTracker1_21_2 extends EntityTrackerBase {
    constructor(arg0: UserConnection)
    playerMaxHealthAttributeValue(): number;
    setPlayerMaxHealthAttributeValue(arg0: number): void;
    trackBoatEntity(arg0: number, arg1: UUID, arg2: number): EntityTracker1_21_2$BoatEntity;
    trackedBoatEntity(arg0: number): EntityTracker1_21_2$BoatEntity;
    updateBoatType(arg0: number, arg1: EntityType): void;
}