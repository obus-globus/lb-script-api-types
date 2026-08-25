import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Command$Factory } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command$Factory.d.ts'
/**
 * Toggle Command
 *
 * Allows you to enable or disable a specific module.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1dd09d11a76f588ec66d4eb9c06f470b5294257e/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/CommandToggle.kt#L36 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/CommandToggle.kt:36}
 */
export class CommandToggle extends Object implements Command$Factory {
    static INSTANCE: CommandToggle;
    createCommand(): Command;
}