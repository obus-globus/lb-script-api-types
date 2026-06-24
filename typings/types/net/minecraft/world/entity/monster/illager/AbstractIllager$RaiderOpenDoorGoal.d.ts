import type { OpenDoorGoal } from '../../../../../../net/minecraft/world/entity/ai/goal/OpenDoorGoal.d.ts'
import type { AbstractIllager } from '../../../../../../net/minecraft/world/entity/monster/illager/AbstractIllager.d.ts'
import type { Raider } from '../../../../../../net/minecraft/world/entity/raid/Raider.d.ts'
export class AbstractIllager$RaiderOpenDoorGoal extends OpenDoorGoal {
    constructor(null_: AbstractIllager, raider: Raider)
    canUse(): boolean;
}