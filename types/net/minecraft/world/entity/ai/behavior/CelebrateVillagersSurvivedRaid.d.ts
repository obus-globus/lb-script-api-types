import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { Behavior } from '../../../../../../net/minecraft/world/entity/ai/behavior/Behavior.d.ts'
import type { Villager } from '../../../../../../net/minecraft/world/entity/npc/villager/Villager.d.ts'
import type { Raid } from '../../../../../../net/minecraft/world/entity/raid/Raid.d.ts'
import type { DyeColor } from '../../../../../../net/minecraft/world/item/DyeColor.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class CelebrateVillagersSurvivedRaid extends Behavior<Villager> {
    static DEFAULT_DURATION: number;
    constructor(minDuration: number, maxDuration: number)
    // private currentRaid: Raid;
    canStillUse(level: ServerLevel, body: Villager, timestamp: number): boolean;
    checkExtraStartConditions(level: ServerLevel, body: Villager): boolean;
    // private getFirework(color: DyeColor, flightDuration: number): ItemStack;
    stop(level: ServerLevel, body: Villager, timestamp: number): void;
    tick(level: ServerLevel, body: Villager, timestamp: number): void;
}