import type { CommandDispatcher } from '../../../../../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CommandRegistrar } from '../../../../../../../net/ccbluex/liquidbounce/features/command/CommandRegistrar.d.ts'
import type { ClientCommandSource } from '../../../../../../../net/ccbluex/liquidbounce/features/command/brigadier/ClientCommandSource.d.ts'
/**
 * Coordinates Command
 *
 * Copies your coordinates to your clipboard.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/CommandCoordinates.kt#L43 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/CommandCoordinates.kt:43}
 */
export class CommandCoordinates extends Object implements CommandRegistrar {
    static INSTANCE: CommandCoordinates;
    // private getCoordinates(fancy: boolean): string;
    register(dispatcher: CommandDispatcher<ClientCommandSource>): void;
}