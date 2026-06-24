import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventListener } from '../../../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { PlayerNetworkMovementTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerNetworkMovementTickEvent.d.ts'
import type { Command } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Command$Factory } from '../../../../../../../net/ccbluex/liquidbounce/features/command/Command$Factory.d.ts'
import type { CommandCenter$CenterHandlerState } from '../../../../../../../net/ccbluex/liquidbounce/features/command/commands/ingame/CommandCenter$CenterHandlerState.d.ts'
/**
 * Center command
 *
 * Centers you at your current position.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/CommandCenter.kt#L31 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/CommandCenter.kt:31}
 */
export class CommandCenter extends Object implements EventListener, Command$Factory {
    static INSTANCE: CommandCenter;
    // private moveHandler: EventHook<PlayerNetworkMovementTickEvent>;
    readonly running: boolean;
    state: CommandCenter$CenterHandlerState;
    children(): EventListener[];
    createCommand(): Command;
    parent(): EventListener | null;
    unregister(): void;
}