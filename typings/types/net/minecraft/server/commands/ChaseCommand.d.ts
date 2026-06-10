import type { CommandDispatcher } from '../../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { Level } from '../../../../net/minecraft/world/level/Level.d.ts'
export class ChaseCommand extends Object {
    static DIMENSION_NAMES: { [key: string]: ResourceKey<Level> };
    static register(paramdispatcher: CommandDispatcher<CommandSourceStack>): void;
    constructor()
}