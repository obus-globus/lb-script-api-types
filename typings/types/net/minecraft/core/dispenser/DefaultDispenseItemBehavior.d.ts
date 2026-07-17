import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Direction } from '../../../../net/minecraft/core/Direction.d.ts'
import type { Position } from '../../../../net/minecraft/core/Position.d.ts'
import type { BlockSource } from '../../../../net/minecraft/core/dispenser/BlockSource.d.ts'
import type { DispenseItemBehavior } from '../../../../net/minecraft/core/dispenser/DispenseItemBehavior.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
import type { Logger } from '../../../../org/slf4j/Logger.d.ts'
export class DefaultDispenseItemBehavior extends Object implements DispenseItemBehavior {
    static LOGGER: Logger;
    static NOOP: DispenseItemBehavior;
    static spawnItem(paramlevel: Level, paramitemStack: ItemStack, paramaccuracy: number, paramdirection: Direction, paramposition: Position): void;
    constructor()
    // private addToInventoryOrDispense(source: BlockSource, itemStack: ItemStack): void;
    consumeWithRemainder(source: BlockSource, dispensed: ItemStack, remainder: ItemStack): ItemStack;
    dispense(source: BlockSource, dispensed: ItemStack): ItemStack;
    execute(source: BlockSource, dispensed: ItemStack): ItemStack;
    playAnimation(source: BlockSource, direction: Direction): void;
    playSound(source: BlockSource): void;
}