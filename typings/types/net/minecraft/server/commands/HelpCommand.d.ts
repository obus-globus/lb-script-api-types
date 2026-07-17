import type { CommandDispatcher } from '../../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { HelpCommandAccessor } from '../../../../net/fabricmc/fabric/mixin/command/HelpCommandAccessor.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
export class HelpCommand extends Object implements HelpCommandAccessor {
    static register(paramdispatcher: CommandDispatcher<CommandSourceStack>): void;
    constructor()
}