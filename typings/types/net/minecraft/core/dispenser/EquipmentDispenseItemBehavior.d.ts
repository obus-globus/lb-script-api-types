import type { Direction } from '../../../../net/minecraft/core/Direction.d.ts'
import type { Position } from '../../../../net/minecraft/core/Position.d.ts'
import type { BlockSource } from '../../../../net/minecraft/core/dispenser/BlockSource.d.ts'
import type { DefaultDispenseItemBehavior } from '../../../../net/minecraft/core/dispenser/DefaultDispenseItemBehavior.d.ts'
import type { DispenseItemBehavior } from '../../../../net/minecraft/core/dispenser/DispenseItemBehavior.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
import type { Logger } from '../../../../org/slf4j/Logger.d.ts'
export class EquipmentDispenseItemBehavior extends DefaultDispenseItemBehavior {
    static INSTANCE: EquipmentDispenseItemBehavior;
    static LOGGER: Logger;
    static NOOP: DispenseItemBehavior;
    static dispenseEquipment(paramsource: BlockSource, paramdispensed: ItemStack): boolean;
    static spawnItem(paramlevel: Level, paramitemStack: ItemStack, paramaccuracy: number, paramdirection: Direction, paramposition: Position): void;
    constructor()
    execute(source: BlockSource, dispensed: ItemStack): ItemStack;
}