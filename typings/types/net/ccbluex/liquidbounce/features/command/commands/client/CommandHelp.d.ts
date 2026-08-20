import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Command$Factory } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command$Factory.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
/**
 * Help Command
 *
 * Provides a help page for displaying other commands.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a9cf2b145901ecd37d3f2a815c20cf0955e76853/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/CommandHelp.kt#L44 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/CommandHelp.kt:44}
 */
export class CommandHelp extends Object implements Command$Factory {
    static INSTANCE: CommandHelp;
    // private buildAliasesText(cmd: Command): Component;
    createCommand(): Command;
}