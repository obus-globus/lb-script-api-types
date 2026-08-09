import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Command$Factory } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command$Factory.d.ts'
/**
 * Bind Command
 *
 * Allows you to bind a key to a module, which means that the module will be activated when the key is pressed.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/8fc1f12b34c50f483c3b3446c45e8bc1de58e20c/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/CommandBind.kt#L49 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/CommandBind.kt:49}
 */
export class CommandBind extends Object implements Command$Factory {
    static INSTANCE: CommandBind;
    createCommand(): Command;
}