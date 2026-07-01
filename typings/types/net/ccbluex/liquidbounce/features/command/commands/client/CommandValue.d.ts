import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Command$Factory } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command$Factory.d.ts'
/**
 * Value Command
 *
 * Allows you to change values by key path.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/707b7339b27ee1da75cb769c96b0d9d292d0a8ad/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/CommandValue.kt#L40 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/CommandValue.kt:40}
 */
export class CommandValue extends Object implements Command$Factory {
    static INSTANCE: CommandValue;
    createCommand(): Command;
    // private resetAllSubCommand(): Command;
    // private resetSubCommand(): Command;
    // private setSubCommand(): Command;
}