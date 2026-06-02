import type { OpenDoorGoal } from '../../../../../../net/minecraft/world/entity/ai/goal/OpenDoorGoal.d.ts'
import type { Raider } from '../../../../../../net/minecraft/world/entity/raid/Raider.d.ts'
export class AbstractIllager$RaiderOpenDoorGoal extends OpenDoorGoal {
    constructor(null_: AbstractIllager$RaiderOpenDoorGoal, raider: Raider)
    canUse(): boolean;
}