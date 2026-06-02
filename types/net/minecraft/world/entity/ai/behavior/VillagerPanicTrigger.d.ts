import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Behavior } from '../../../../../../net/minecraft/world/entity/ai/behavior/Behavior.d.ts'
import type { Villager } from '../../../../../../net/minecraft/world/entity/npc/villager/Villager.d.ts'
export class VillagerPanicTrigger extends Behavior<Villager> {
    static DEFAULT_DURATION: number;
    static hasHostile(parammyBody: LivingEntity): boolean;
    static isHurt(parammyBody: LivingEntity): boolean;
    constructor()
    canStillUse(level: ServerLevel, body: Villager, timestamp: number): boolean;
    start(level: ServerLevel, body: Villager, timestamp: number): void;
    tick(level: ServerLevel, body: Villager, timestamp: number): void;
}