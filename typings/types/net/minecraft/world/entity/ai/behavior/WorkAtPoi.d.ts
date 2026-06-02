import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { Behavior } from '../../../../../../net/minecraft/world/entity/ai/behavior/Behavior.d.ts'
import type { Villager } from '../../../../../../net/minecraft/world/entity/npc/villager/Villager.d.ts'
export class WorkAtPoi extends Behavior<Villager> {
    static DEFAULT_DURATION: number;
    constructor()
    // private lastCheck: number;
    canStillUse(level: ServerLevel, body: Villager, timestamp: number): boolean;
    checkExtraStartConditions(level: ServerLevel, body: Villager): boolean;
    start(level: ServerLevel, body: Villager, timestamp: number): void;
    useWorkstation(level: ServerLevel, body: Villager): void;
}