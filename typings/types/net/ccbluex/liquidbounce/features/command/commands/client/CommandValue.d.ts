import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Command$Factory } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command$Factory.d.ts'
/**
 * Value Command
 *
 * Allows you to change values by key path.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a459e42039d5ec52f278233774c8880408bcf2a6/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/CommandValue.kt#L40 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/CommandValue.kt:40}
 */
export class CommandValue extends Object implements Command$Factory {
    static INSTANCE: CommandValue;
    createCommand(): Command;
    // private resetAllSubCommand(): Command;
    // private resetSubCommand(): Command;
    // private setSubCommand(): Command;
}