import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { Behavior } from '../../../../../../net/minecraft/world/entity/ai/behavior/Behavior.d.ts'
import type { Villager } from '../../../../../../net/minecraft/world/entity/npc/villager/Villager.d.ts'
import type { Item } from '../../../../../../net/minecraft/world/item/Item.d.ts'
export class TradeWithVillager extends Behavior<Villager> {
    static DEFAULT_DURATION: number;
    constructor()
    // private trades: Item[];
    canStillUse(level: ServerLevel, body: Villager, timestamp: number): boolean;
    checkExtraStartConditions(level: ServerLevel, body: Villager): boolean;
    start(level: ServerLevel, myBody: Villager, timestamp: number): void;
    stop(level: ServerLevel, body: Villager, timestamp: number): void;
    tick(level: ServerLevel, body: Villager, timestamp: number): void;
}