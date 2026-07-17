import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Command$Factory } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command$Factory.d.ts'
/**
 * Bind Command
 *
 * Allows you to bind a key to a module, which means that the module will be activated when the key is pressed.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/567a259aa7f4250a1b2911700de4282fe934a3d9/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/CommandBind.kt#L49 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/CommandBind.kt:49}
 */
export class CommandBind extends Object implements Command$Factory {
    static INSTANCE: CommandBind;
    createCommand(): Command;
}