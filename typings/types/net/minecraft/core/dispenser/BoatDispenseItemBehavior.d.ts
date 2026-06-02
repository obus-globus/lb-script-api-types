import type { Direction } from '../../../../net/minecraft/core/Direction.d.ts'
import type { Position } from '../../../../net/minecraft/core/Position.d.ts'
import type { BlockSource } from '../../../../net/minecraft/core/dispenser/BlockSource.d.ts'
import type { DefaultDispenseItemBehavior } from '../../../../net/minecraft/core/dispenser/DefaultDispenseItemBehavior.d.ts'
import type { DispenseItemBehavior } from '../../../../net/minecraft/core/dispenser/DispenseItemBehavior.d.ts'
import type { EntityType } from '../../../../net/minecraft/world/entity/EntityType.d.ts'
import type { AbstractBoat } from '../../../../net/minecraft/world/entity/vehicle/boat/AbstractBoat.d.ts'
import type { ItemStack } from '../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
import type { Logger } from '../../../../org/slf4j/Logger.d.ts'
export class BoatDispenseItemBehavior extends DefaultDispenseItemBehavior {
    static LOGGER: Logger;
    static NOOP: DispenseItemBehavior;
    static spawnItem(paramlevel: Level, paramitemStack: ItemStack, paramaccuracy: number, paramdirection: Direction, paramposition: Position): void;
    constructor(type: EntityType<AbstractBoat>)
    // private defaultDispenseItemBehavior: DefaultDispenseItemBehavior;
    // private type: EntityType<AbstractBoat>;
    execute(source: BlockSource, dispensed: ItemStack): ItemStack;
    playSound(source: BlockSource): void;
}