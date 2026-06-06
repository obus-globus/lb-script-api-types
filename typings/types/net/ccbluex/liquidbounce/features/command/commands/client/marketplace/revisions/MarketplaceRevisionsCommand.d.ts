import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Command$Factory } from '../../../../../../../../../net/ccbluex/liquidbounce/features/command/Command$Factory.d.ts'
/**
 * Manage marketplace item revisions
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/marketplace/revisions/MarketplaceRevisionsCommand.kt#L24 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/marketplace/revisions/MarketplaceRevisionsCommand.kt:24}
 */
export class MarketplaceRevisionsCommand extends Object implements Command$Factory {
    static INSTANCE: MarketplaceRevisionsCommand;
    createCommand(): Command;
}