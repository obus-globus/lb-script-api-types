import type { CommandDispatcher } from '../../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
export class EmoteCommands extends Object {
    static register(paramdispatcher: CommandDispatcher<CommandSourceStack>): void;
    constructor()
}