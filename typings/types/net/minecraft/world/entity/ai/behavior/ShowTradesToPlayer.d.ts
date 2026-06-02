import type { ServerLevel } from '../../../../../../net/minecraft/server/level/ServerLevel.d.ts'
import type { LivingEntity } from '../../../../../../net/minecraft/world/entity/LivingEntity.d.ts'
import type { Behavior } from '../../../../../../net/minecraft/world/entity/ai/behavior/Behavior.d.ts'
import type { Villager } from '../../../../../../net/minecraft/world/entity/npc/villager/Villager.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { MerchantOffer } from '../../../../../../net/minecraft/world/item/trading/MerchantOffer.d.ts'
export class ShowTradesToPlayer extends Behavior<Villager> {
    static DEFAULT_DURATION: number;
    constructor(minDuration: number, maxDuration: number)
    // private cycleCounter: number;
    // private displayIndex: number;
    // private displayItems: ItemStack[];
    // private lookTime: number;
    // private playerItemStack: ItemStack;
    canStillUse(level: ServerLevel, body: Villager, timestamp: number): boolean;
    checkExtraStartConditions(level: ServerLevel, body: Villager): boolean;
    // private displayCyclingItems(villager: Villager): void;
    // private displayFirstItem(villager: Villager): void;
    // private findItemsToDisplay(player: LivingEntity, villager: Villager): void;
    // private lookAtTarget(myBody: Villager): LivingEntity;
    // private playerItemStackMatchesCostOfOffer(offer: MerchantOffer): boolean;
    start(level: ServerLevel, body: Villager, timestamp: number): void;
    stop(level: ServerLevel, body: Villager, timestamp: number): void;
    tick(level: ServerLevel, body: Villager, timestamp: number): void;
    // private updateDisplayItems(villager: Villager): void;
}