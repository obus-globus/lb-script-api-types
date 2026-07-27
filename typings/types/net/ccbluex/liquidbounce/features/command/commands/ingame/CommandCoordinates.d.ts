import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Command$Factory } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command$Factory.d.ts'
/**
 * Coordinates Command
 *
 * Copies your coordinates to your clipboard.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/c86714198f6c981b97c9965ca188b8b8598816e4/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/CommandCoordinates.kt#L39 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/CommandCoordinates.kt:39}
 */
export class CommandCoordinates extends Object implements Command$Factory {
    static INSTANCE: CommandCoordinates;
    createCommand(): Command;
    // private getCoordinates(fancy: boolean): string;
}