import type { CommandDispatcher } from '../../../../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { LiteralArgumentBuilder } from '../../../../../../com/mojang/brigadier/builder/LiteralArgumentBuilder.d.ts'
import type { LiteralCommandNode } from '../../../../../../com/mojang/brigadier/tree/LiteralCommandNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ClientCommandSource } from '../../../../../../net/ccbluex/liquidbounce/features/command/brigadier/ClientCommandSource.d.ts'
import type { CmdLiteralScope } from '../../../../../../net/ccbluex/liquidbounce/features/command/brigadier/CmdLiteralScope.d.ts'
export class CommandDslEntryKt extends Object {
    /**
     * Builds a literal directly as a Brigadier builder using the typed command DSL.
     * Register the returned builder through {@link com.mojang.brigadier.CommandDispatcher.register}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e67fdf9b70131f478c5894cf9de1f2d4aa7a95ce/src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/CommandDslEntry.kt#L28 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/CommandDslEntry.kt:28}
     */
    static literal(name: string, block: (param0: CmdLiteralScope) => void): LiteralArgumentBuilder<ClientCommandSource>;
    /**
     * Builds a literal directly as a Brigadier builder using the typed command DSL (shortcut)
     * Register the returned builder through {@link com.mojang.brigadier.CommandDispatcher.register}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e67fdf9b70131f478c5894cf9de1f2d4aa7a95ce/src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/CommandDslEntry.kt#L38 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/brigadier/CommandDslEntry.kt:38}
     */
    static register(self: CommandDispatcher<ClientCommandSource>, name: string, aliases: string[], block: (param0: CmdLiteralScope) => void): LiteralCommandNode<ClientCommandSource>;
}