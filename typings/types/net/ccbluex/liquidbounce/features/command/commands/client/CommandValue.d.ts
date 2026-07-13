import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Command$Factory } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command$Factory.d.ts'
/**
 * Value Command
 *
 * Allows you to change values by key path.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/3bc82a3329f49d9150e48b299ce4a5e8571a038d/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/CommandValue.kt#L40 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/CommandValue.kt:40}
 */
export class CommandValue extends Object implements Command$Factory {
    static INSTANCE: CommandValue;
    createCommand(): Command;
    // private resetAllSubCommand(): Command;
    // private resetSubCommand(): Command;
    // private setSubCommand(): Command;
}