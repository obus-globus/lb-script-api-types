import type { CommandContext } from '../../../../../../com/mojang/brigadier/context/CommandContext.d.ts'
import type { SuggestionProvider } from '../../../../../../com/mojang/brigadier/suggestion/SuggestionProvider.d.ts'
import type { Suggestions } from '../../../../../../com/mojang/brigadier/suggestion/Suggestions.d.ts'
import type { SuggestionsBuilder } from '../../../../../../com/mojang/brigadier/suggestion/SuggestionsBuilder.d.ts'
import type { CompletableFuture } from '../../../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ChainElement } from '../../../../../../net/ccbluex/liquidbounce/features/command/brigadier/ChainElement.d.ts'
import type { ClientCommandSource } from '../../../../../../net/ccbluex/liquidbounce/features/command/brigadier/ClientCommandSource.d.ts'
import type { CmdArg } from '../../../../../../net/ccbluex/liquidbounce/features/command/brigadier/CmdArg.d.ts'
/**
 * One argument inside a {@link CmdArgChain}: its handle (name + type + default), whether a
 * value must be provided and an optional suggestion provider.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/CommandDslRuntime.kt#L45 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/CommandDslRuntime.kt:45}
 */
export class CmdArgElement extends Object implements ChainElement {
    constructor(handle: CmdArg<Object>, required: boolean, suggests: ((param0: CommandContext<ClientCommandSource>, param1: SuggestionsBuilder) => CompletableFuture<Suggestions>) | null)
    readonly handle: CmdArg<Object>;
    readonly required: boolean;
    readonly suggests: ((param0: CommandContext<ClientCommandSource>, param1: SuggestionsBuilder) => CompletableFuture<Suggestions>) | null;
}