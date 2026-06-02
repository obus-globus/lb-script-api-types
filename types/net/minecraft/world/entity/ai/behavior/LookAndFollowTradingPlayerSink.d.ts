import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { Behavior } from '../../../../../../net/minecraft/world/entity/ai/behavior/Behavior.d.ts'
import type { Villager } from '../../../../../../net/minecraft/world/entity/npc/villager/Villager.d.ts'
export class LookAndFollowTradingPlayerSink extends Behavior<Villager> {
    static DEFAULT_DURATION: number;
    constructor(speedModifier: number)
    // private speedModifier: number;
    canStillUse(level: ServerLevel, body: Villager, timestamp: number): boolean;
    checkExtraStartConditions(level: ServerLevel, body: Villager): boolean;
    // private followPlayer(body: Villager): void;
    start(level: ServerLevel, body: Villager, timestamp: number): void;
    stop(level: ServerLevel, body: Villager, timestamp: number): void;
    tick(level: ServerLevel, body: Villager, timestamp: number): void;
    timedOut(timestamp: number): boolean;
}