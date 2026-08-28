import type { CommandDispatcher } from '../../../../../../../com/mojang/brigadier/CommandDispatcher.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventListener } from '../../../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { PlayerNetworkMovementTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerNetworkMovementTickEvent.d.ts'
import type { CommandRegistrar } from '../../../../../../../net/ccbluex/liquidbounce/features/command/CommandRegistrar.d.ts'
import type { ClientCommandSource } from '../../../../../../../net/ccbluex/liquidbounce/features/command/brigadier/ClientCommandSource.d.ts'
import type { CommandCenter$CenterHandlerState } from '../../../../../../../net/ccbluex/liquidbounce/features/command/commands/ingame/CommandCenter$CenterHandlerState.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
/**
 * Center command
 *
 * Centers you at your current position.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/CommandCenter.kt#L39 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/commands/ingame/CommandCenter.kt:39}
 */
export class CommandCenter extends Object implements EventListener, CommandRegistrar {
    static INSTANCE: CommandCenter;
    readonly debugDisplayName: Component;
    readonly debugOwnerId: string;
    // private moveHandler: EventHook<PlayerNetworkMovementTickEvent>;
    readonly running: boolean;
    state: CommandCenter$CenterHandlerState;
    children(): EventListener[];
    parent(): EventListener | null;
    register(dispatcher: CommandDispatcher<ClientCommandSource>): void;
    unregister(): void;
}