import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { EntitySleepEvents$AllowBed } from '../../../../../../../net/fabricmc/fabric/api/entity/event/v1/EntitySleepEvents$AllowBed.d.ts'
import type { EntitySleepEvents$AllowNearbyMonsters } from '../../../../../../../net/fabricmc/fabric/api/entity/event/v1/EntitySleepEvents$AllowNearbyMonsters.d.ts'
import type { EntitySleepEvents$AllowResettingTime } from '../../../../../../../net/fabricmc/fabric/api/entity/event/v1/EntitySleepEvents$AllowResettingTime.d.ts'
import type { EntitySleepEvents$AllowSettingSpawn } from '../../../../../../../net/fabricmc/fabric/api/entity/event/v1/EntitySleepEvents$AllowSettingSpawn.d.ts'
import type { EntitySleepEvents$AllowSleeping } from '../../../../../../../net/fabricmc/fabric/api/entity/event/v1/EntitySleepEvents$AllowSleeping.d.ts'
import type { EntitySleepEvents$ModifySleepingDirection } from '../../../../../../../net/fabricmc/fabric/api/entity/event/v1/EntitySleepEvents$ModifySleepingDirection.d.ts'
import type { EntitySleepEvents$ModifyWakeUpPosition } from '../../../../../../../net/fabricmc/fabric/api/entity/event/v1/EntitySleepEvents$ModifyWakeUpPosition.d.ts'
import type { EntitySleepEvents$SetBedOccupationState } from '../../../../../../../net/fabricmc/fabric/api/entity/event/v1/EntitySleepEvents$SetBedOccupationState.d.ts'
import type { EntitySleepEvents$StartSleeping } from '../../../../../../../net/fabricmc/fabric/api/entity/event/v1/EntitySleepEvents$StartSleeping.d.ts'
import type { EntitySleepEvents$StopSleeping } from '../../../../../../../net/fabricmc/fabric/api/entity/event/v1/EntitySleepEvents$StopSleeping.d.ts'
import type { Event } from '../../../../../../../net/fabricmc/fabric/api/event/Event.d.ts'
import type { EventResult } from '../../../../../../../net/fabricmc/fabric/api/util/EventResult.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../../../net/minecraft/core/Direction.d.ts'
import type { LivingEntity } from '../../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Player } from '../../../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { Player$BedSleepingProblem } from '../../../../../../../net/minecraft/world/entity/player/Player$BedSleepingProblem.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { Vec3 } from '../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class EntitySleepEvents extends Object {
    static ALLOW_BED: Event<(param0: LivingEntity, param1: BlockPos, param2: BlockState, param3: boolean) => EventResult>;
    static ALLOW_NEARBY_MONSTERS: Event<(param0: Player, param1: BlockPos, param2: boolean) => EventResult>;
    static ALLOW_RESETTING_TIME: Event<(param0: Player) => boolean>;
    static ALLOW_SETTING_SPAWN: Event<(param0: Player, param1: BlockPos) => boolean>;
    static ALLOW_SLEEPING: Event<(param0: Player, param1: BlockPos) => Player$BedSleepingProblem>;
    static MODIFY_SLEEPING_DIRECTION: Event<(param0: LivingEntity, param1: BlockPos, param2: Direction) => Direction>;
    static MODIFY_WAKE_UP_POSITION: Event<(param0: LivingEntity, param1: BlockPos, param2: BlockState, param3: Vec3) => Vec3>;
    static SET_BED_OCCUPATION_STATE: Event<(param0: LivingEntity, param1: BlockPos, param2: BlockState, param3: boolean) => boolean>;
    static START_SLEEPING: Event<(param0: LivingEntity, param1: BlockPos) => void>;
    static STOP_SLEEPING: Event<(param0: LivingEntity, param1: BlockPos) => void>;
    private constructor()
}