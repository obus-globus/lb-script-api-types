import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Player } from '../../../../../net/minecraft/world/entity/player/Player.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Level } from '../../../../../net/minecraft/world/level/Level.d.ts'
export class DebugMessages extends Object {
    static forGlobalPos(paramarg0: Level, paramarg1: BlockPos): string;
    static forInventory(paramarg0: ItemStack[]): string;
    static forPlayer(paramarg0: Player): string;
    constructor()
}