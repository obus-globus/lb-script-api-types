import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Command$Factory } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command$Factory.d.ts'
/**
 * Toggle Command
 *
 * Allows you to enable or disable a specific module.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/CommandToggle.kt#L31 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/CommandToggle.kt:31}
 */
export class CommandToggle extends Object implements Command$Factory {
    static INSTANCE: CommandToggle;
    createCommand(): Command;
}