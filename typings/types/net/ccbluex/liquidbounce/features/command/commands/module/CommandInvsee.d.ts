import type { UUID } from '../../../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Command$Factory } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command$Factory.d.ts'
/**
 * Command Invsee
 *
 * ???
 *
 * Module: {@link ModuleInventoryTracker}
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/module/CommandInvsee.kt#L33 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/module/CommandInvsee.kt:33}
 */
export class CommandInvsee extends Object implements Command$Factory {
    static INSTANCE: CommandInvsee;
    viewedPlayer: UUID | null;
    createCommand(): Command;
}