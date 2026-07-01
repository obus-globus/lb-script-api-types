import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Command$Factory } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command$Factory.d.ts'
/**
 * Toggle Command
 *
 * Allows you to enable or disable a specific module.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/707b7339b27ee1da75cb769c96b0d9d292d0a8ad/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/CommandToggle.kt#L36 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/CommandToggle.kt:36}
 */
export class CommandToggle extends Object implements Command$Factory {
    static INSTANCE: CommandToggle;
    createCommand(): Command;
}