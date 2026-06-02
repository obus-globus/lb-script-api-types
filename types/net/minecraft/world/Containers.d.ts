import type { Object } from '../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../net/minecraft/core/BlockPos.d.ts'
import type { Entity } from '../../../net/minecraft/world/entity/Entity.d.ts'
import type { ItemStack } from '../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Level } from '../../../net/minecraft/world/level/Level.d.ts'
import type { BlockState } from '../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class Containers extends Object {
    static dropContents(paramlevel: Level, parampos: BlockPos, paramlist: ItemStack[]): void;
    static dropContents(paramlevel: Level, parampos: BlockPos, paramcontainer: ItemStack[]): void;
    static dropContents(paramlevel: Level, paramentity: Entity, paramcontainer: ItemStack[]): void;
    static dropItemStack(paramlevel: Level, paramx: number, paramy: number, paramz: number, paramitemStack: ItemStack): void;
    static updateNeighboursAfterDestroy(paramstate: BlockState, paramlevel: Level, parampos: BlockPos): void;
    constructor()
}