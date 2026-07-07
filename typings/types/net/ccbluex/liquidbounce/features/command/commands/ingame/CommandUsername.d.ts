import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Command$Factory } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command$Factory.d.ts'
import type { MinecraftShortcuts } from '../../../../../../../net/ccbluex/liquidbounce/features/module/MinecraftShortcuts.d.ts'
/**
 * CommandUsername
 *
 * Displays the current username.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fc8688f1fc8b0c8dfed8d3dc547a47ad55374af5/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/CommandUsername.kt#L38 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/CommandUsername.kt:38}
 */
export class CommandUsername extends Object implements Command$Factory, MinecraftShortcuts {
    static INSTANCE: CommandUsername;
    createCommand(): Command;
}