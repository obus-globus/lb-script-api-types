import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Command$Factory } from '../../../../../../../../../net/ccbluex/liquidbounce/features/command/Command$Factory.d.ts'
/**
 * Manage marketplace item revisions
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/0f34808bf6954ff6126dde353ff9e896eb4a2ead/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/marketplace/revisions/MarketplaceRevisionsCommand.kt#L27 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/marketplace/revisions/MarketplaceRevisionsCommand.kt:27}
 */
export class MarketplaceRevisionsCommand extends Object implements Command$Factory {
    static INSTANCE: MarketplaceRevisionsCommand;
    createCommand(): Command;
}