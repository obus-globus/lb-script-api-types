import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Command$Factory } from '../../../../../../../../../net/ccbluex/liquidbounce/features/command/Command$Factory.d.ts'
/**
 * Manage marketplace item revisions
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/c86714198f6c981b97c9965ca188b8b8598816e4/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/marketplace/revisions/MarketplaceRevisionsCommand.kt#L27 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/marketplace/revisions/MarketplaceRevisionsCommand.kt:27}
 */
export class MarketplaceRevisionsCommand extends Object implements Command$Factory {
    static INSTANCE: MarketplaceRevisionsCommand;
    createCommand(): Command;
}