import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Command$Factory } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command$Factory.d.ts'
/**
 * Coordinates Command
 *
 * Copies your coordinates to your clipboard.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a0e57b28307a88c68b5bf7b52a54201b8a15cec8/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/CommandCoordinates.kt#L39 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/CommandCoordinates.kt:39}
 */
export class CommandCoordinates extends Object implements Command$Factory {
    static INSTANCE: CommandCoordinates;
    createCommand(): Command;
    // private getCoordinates(fancy: boolean): string;
}