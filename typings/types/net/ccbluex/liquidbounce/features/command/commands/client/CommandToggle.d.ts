import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Command$Factory } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command$Factory.d.ts'
/**
 * Toggle Command
 *
 * Allows you to enable or disable a specific module.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/4ff494f7403bf0237d6e1392e6856c89deb3d311/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/CommandToggle.kt#L36 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/CommandToggle.kt:36}
 */
export class CommandToggle extends Object implements Command$Factory {
    static INSTANCE: CommandToggle;
    createCommand(): Command;
}