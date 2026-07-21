import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Command$Factory } from '../../../../../../../../../net/ccbluex/liquidbounce/features/command/Command$Factory.d.ts'
/**
 * Upload marketplace item revision
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e56f181853dc858654c9fc909afec417d274473d/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/marketplace/revisions/MarketplaceUploadRevisionCommand.kt#L39 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/marketplace/revisions/MarketplaceUploadRevisionCommand.kt:39}
 */
export class MarketplaceUploadRevisionCommand extends Object implements Command$Factory {
    static INSTANCE: MarketplaceUploadRevisionCommand;
    createCommand(): Command;
}