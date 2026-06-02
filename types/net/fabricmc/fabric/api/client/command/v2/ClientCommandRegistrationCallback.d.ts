import type { CommandDispatcher } from '../../../../../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { FabricClientCommandSource } from '../../../../../../../net/fabricmc/fabric/api/client/command/v2/FabricClientCommandSource.d.ts'
import type { CommandBuildContext } from '../../../../../../../net/minecraft/commands/CommandBuildContext.d.ts'
export interface ClientCommandRegistrationCallback extends Object{
    register(arg0: CommandDispatcher<FabricClientCommandSource>, arg1: CommandBuildContext): void;
}