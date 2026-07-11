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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/module/CommandInvsee.kt#L40 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/module/CommandInvsee.kt:40}
 */
export class CommandInvsee extends Object implements Command$Factory {
    static INSTANCE: CommandInvsee;
    viewedPlayer: UUID | null;
    createCommand(): Command;
}