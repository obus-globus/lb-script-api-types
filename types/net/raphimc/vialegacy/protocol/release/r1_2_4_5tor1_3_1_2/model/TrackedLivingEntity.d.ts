import type { EntityTypes1_8$EntityType } from '../../../../../../../com/viaversion/viaversion/api/minecraft/entities/EntityTypes1_8$EntityType.d.ts'
import type { EntityData } from '../../../../../../../com/viaversion/viaversion/api/minecraft/entitydata/EntityData.d.ts'
import type { Location } from '../../../../../../../net/raphimc/vialegacy/api/model/Location.d.ts'
import type { AbstractTrackedEntity } from '../../../../../../../net/raphimc/vialegacy/protocol/release/r1_2_4_5tor1_3_1_2/model/AbstractTrackedEntity.d.ts'
import type { ConfiguredSound } from '../../../../../../../net/raphimc/vialegacy/protocol/release/r1_2_4_5tor1_3_1_2/model/ConfiguredSound.d.ts'
import type { EntityTracker } from '../../../../../../../net/raphimc/vialegacy/protocol/release/r1_2_4_5tor1_3_1_2/storage/EntityTracker.d.ts'
export class TrackedLivingEntity extends AbstractTrackedEntity {
    constructor(arg0: number, arg1: Location, arg2: EntityTypes1_8$EntityType)
    growingAge: number;
    isTamed: boolean;
    // private soundTime: number;
    wolfHealth: number;
    wolfIsAngry: boolean;
    applyPitch(arg0: EntityTracker, arg1: ConfiguredSound): void;
    tick(arg0: EntityTracker): void;
    updateEntityData(arg0: EntityData[]): void;
}