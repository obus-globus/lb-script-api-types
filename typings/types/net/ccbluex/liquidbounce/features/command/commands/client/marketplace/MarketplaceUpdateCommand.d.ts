import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Command$Factory } from '../../../../../../../../net/ccbluex/liquidbounce/features/command/Command$Factory.d.ts'
/**
 * Subscribe to marketplace item
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/c86714198f6c981b97c9965ca188b8b8598816e4/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/marketplace/MarketplaceUpdateCommand.kt#L35 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/marketplace/MarketplaceUpdateCommand.kt:35}
 */
export class MarketplaceUpdateCommand extends Object implements Command$Factory {
    static INSTANCE: MarketplaceUpdateCommand;
    createCommand(): Command;
}