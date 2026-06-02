import type { Record } from '../../../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { PlayerInventoryData$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/integration/interop/protocol/rest/v1/game/PlayerInventoryData$Companion.d.ts'
import type { Player } from '../../../../../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { ItemStack } from '../../../../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class PlayerInventoryData extends Record {
    static Companion: PlayerInventoryData$Companion;
    static fromPlayer(paramarg0: Player): PlayerInventoryData;
    constructor(armor: ItemStack[], main: ItemStack[], crafting: ItemStack[], enderChest: ItemStack[])
    // private armor: ItemStack[];
    /*not mapped: */ armor(): ItemStack[];
    // private crafting: ItemStack[];
    /*not mapped: */ crafting(): ItemStack[];
    // private enderChest: ItemStack[];
    /*not mapped: */ enderChest(): ItemStack[];
    // private main: ItemStack[];
    /*not mapped: */ main(): ItemStack[];
    component1(): ItemStack[];
    component2(): ItemStack[];
    component3(): ItemStack[];
    component4(): ItemStack[];
    copy(armor: ItemStack[], main: ItemStack[], crafting: ItemStack[], enderChest: ItemStack[]): PlayerInventoryData;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}