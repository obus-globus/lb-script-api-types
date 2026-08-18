import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Command$Factory } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command$Factory.d.ts'
/**
 * Value Command
 *
 * Allows you to change values by key path.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/7419c75563c98eff050759c8dc8d8c35ed59d950/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/CommandValue.kt#L40 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/CommandValue.kt:40}
 */
export class CommandValue extends Object implements Command$Factory {
    static INSTANCE: CommandValue;
    createCommand(): Command;
    // private resetAllSubCommand(): Command;
    // private resetSubCommand(): Command;
    // private setSubCommand(): Command;
}