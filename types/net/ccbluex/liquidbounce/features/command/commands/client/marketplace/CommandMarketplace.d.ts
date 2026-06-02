import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Command$Factory } from '../../../../../../../../net/ccbluex/liquidbounce/features/command/Command$Factory.d.ts'
/**
 * Marketplace command
 *
 * Allows interacting with the LiquidBounce Marketplace
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/marketplace/CommandMarketplace.kt#L26 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/client/marketplace/CommandMarketplace.kt:26}
 */
export class CommandMarketplace extends Object implements Command$Factory {
    static INSTANCE: CommandMarketplace;
    createCommand(): Command;
}