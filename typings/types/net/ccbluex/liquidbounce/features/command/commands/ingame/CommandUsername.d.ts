import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Command$Factory } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command$Factory.d.ts'
import type { MinecraftShortcuts } from '../../../../../../../net/ccbluex/liquidbounce/features/module/MinecraftShortcuts.d.ts'
/**
 * CommandUsername
 *
 * Displays the current username.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/9e7b00e677594d328d20ab213c6936c4d553b720/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/CommandUsername.kt#L38 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/CommandUsername.kt:38}
 */
export class CommandUsername extends Object implements Command$Factory, MinecraftShortcuts {
    static INSTANCE: CommandUsername;
    createCommand(): Command;
}