import type { CommandDispatcher } from '../../../../../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { LiteralCommandNode } from '../../../../../../../com/mojang/brigadier/tree/LiteralCommandNode.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CommandRegistrar } from '../../../../../../../net/ccbluex/liquidbounce/features/command/CommandRegistrar.d.ts'
import type { ClientCommandSource } from '../../../../../../../net/ccbluex/liquidbounce/features/command/brigadier/ClientCommandSource.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
/**
 * Help Command
 *
 * Provides a help page for displaying other commands.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/CommandHelp.kt#L47 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/CommandHelp.kt:47}
 */
export class CommandHelp extends Object implements CommandRegistrar {
    static INSTANCE: CommandHelp;
    // private buildAliasesText(mainNode: LiteralCommandNode<ClientCommandSource>): Component;
    // private buildRow(node: LiteralCommandNode<ClientCommandSource>): Component;
    register(dispatcher: CommandDispatcher<ClientCommandSource>): void;
}