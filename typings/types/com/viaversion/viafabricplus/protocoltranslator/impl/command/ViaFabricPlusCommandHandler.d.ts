import type { CommandContext } from '../../../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { Suggestions } from '../../../../../../com/mojang/brigadier/suggestion/Suggestions.d.ts'
import type { SuggestionsBuilder } from '../../../../../../com/mojang/brigadier/suggestion/SuggestionsBuilder.d.ts'
import type { ViaCommandHandler } from '../../../../../../com/viaversion/viaversion/commands/ViaCommandHandler.d.ts'
import type { CompletableFuture } from '../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { FabricClientCommandSource } from '../../../../../../net/fabricmc/fabric/api/client/command/v2/FabricClientCommandSource.d.ts'
export class ViaFabricPlusCommandHandler extends ViaCommandHandler {
    constructor()
    execute(arg0: CommandContext<FabricClientCommandSource>): number;
    suggestion(arg0: CommandContext<FabricClientCommandSource>, arg1: SuggestionsBuilder): CompletableFuture<Suggestions>;
}