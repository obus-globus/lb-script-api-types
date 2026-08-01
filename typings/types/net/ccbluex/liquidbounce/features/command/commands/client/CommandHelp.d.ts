import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Command$Factory } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command$Factory.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
/**
 * Help Command
 *
 * Provides a help page for displaying other commands.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a459e42039d5ec52f278233774c8880408bcf2a6/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/CommandHelp.kt#L43 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/CommandHelp.kt:43}
 */
export class CommandHelp extends Object implements Command$Factory {
    static INSTANCE: CommandHelp;
    // private buildAliasesText(cmd: Command): Component;
    createCommand(): Command;
}