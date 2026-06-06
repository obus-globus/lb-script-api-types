import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Command$Factory } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command$Factory.d.ts'
/**
 * Coordinates Command
 *
 * Copies your coordinates to your clipboard.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/CommandCoordinates.kt#L34 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/CommandCoordinates.kt:34}
 */
export class CommandCoordinates extends Object implements Command$Factory {
    static INSTANCE: CommandCoordinates;
    createCommand(): Command;
    // private getCoordinates(fancy: boolean): string;
}