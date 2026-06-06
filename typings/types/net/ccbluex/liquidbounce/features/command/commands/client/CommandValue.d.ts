import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Command$Factory } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command$Factory.d.ts'
/**
 * Value Command
 *
 * Allows you to change values by key path.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/CommandValue.kt#L35 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/CommandValue.kt:35}
 */
export class CommandValue extends Object implements Command$Factory {
    static INSTANCE: CommandValue;
    createCommand(): Command;
    // private resetAllSubCommand(): Command;
    // private resetSubCommand(): Command;
    // private setSubCommand(): Command;
}