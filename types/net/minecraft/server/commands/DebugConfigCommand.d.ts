import type { CommandDispatcher } from '../../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CommandBuildContext } from '../../../../net/minecraft/commands/CommandBuildContext.d.ts'
import type { CommandSourceStack } from '../../../../net/minecraft/commands/CommandSourceStack.d.ts'
export class DebugConfigCommand extends Object {
    static register(paramdispatcher: CommandDispatcher<CommandSourceStack>, paramcontext: CommandBuildContext): void;
    constructor()
}