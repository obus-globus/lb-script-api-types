import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Command$Factory } from '../../../../../../../../net/ccbluex/liquidbounce/features/command/Command$Factory.d.ts'
/**
 * Subscribe to marketplace item
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/4ff494f7403bf0237d6e1392e6856c89deb3d311/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/marketplace/MarketplaceSubscribeCommand.kt#L38 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/marketplace/MarketplaceSubscribeCommand.kt:38}
 */
export class MarketplaceSubscribeCommand extends Object implements Command$Factory {
    static INSTANCE: MarketplaceSubscribeCommand;
    createCommand(): Command;
}