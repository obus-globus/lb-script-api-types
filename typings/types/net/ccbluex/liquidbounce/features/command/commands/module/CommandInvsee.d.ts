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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cd6fab2c64d4683279fb8734248e80c1cfb2b0f2/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/module/CommandInvsee.kt#L40 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/module/CommandInvsee.kt:40}
 */
export class CommandInvsee extends Object implements Command$Factory {
    static INSTANCE: CommandInvsee;
    viewedPlayer: UUID | null;
    createCommand(): Command;
}