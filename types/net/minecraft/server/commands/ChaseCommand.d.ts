import type { CommandDispatcher } from '../../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
export class ChaseCommand extends Object {
    static DIMENSION_NAMES: { [key: string]: Object | null };
    static register(paramdispatcher: CommandDispatcher<CommandSourceStack>): void;
    constructor()
}