import type { JavaMap } from '../../../../../../../../JavaMap.d.ts'
import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { KeyboardKeyEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/KeyboardKeyEvent.d.ts'
import type { MovementInputEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/MovementInputEvent.d.ts'
import type { PacketEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { PlayerContainerInputEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerContainerInputEvent.d.ts'
import type { ClientModule } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleInventoryMove$Behaviour } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/inventorymove/ModuleInventoryMove$Behaviour.d.ts'
import type { KeyMapping } from '../../../../../../../../net/minecraft/client/KeyMapping.d.ts'
import type { Screen } from '../../../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { KeyEvent } from '../../../../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { Packet } from '../../../../../../../../net/minecraft/network/protocol/Packet.d.ts'
/**
 * InventoryMove module
 *
 * Allows you to walk while an inventory is opened.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e67fdf9b70131f478c5894cf9de1f2d4aa7a95ce/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/inventorymove/ModuleInventoryMove.kt#L61 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/inventorymove/ModuleInventoryMove.kt:61}
 */
export class ModuleInventoryMove extends ClientModule {
    static INSTANCE: ModuleInventoryMove;
    static shouldHandleInputs(key: KeyMapping, screen: Screen | null): boolean;
    static shouldHandleInputs(event: KeyEvent): boolean;
    // private behavior: ModuleInventoryMove$Behaviour;
    // private /*not mapped: */ getBehavior(): ModuleInventoryMove$Behaviour;
    // private delayedContainerPackets: Packet<any>[];
    // private keyHandler: EventHook<KeyboardKeyEvent>;
    // private movementInputHandler: EventHook<MovementInputEvent>;
    // private movementKeys: JavaMap<any, any>;
    // private packetHandler: EventHook<PacketEvent>;
    // private passthroughSneak: boolean;
    // private /*not mapped: */ getPassthroughSneak(): boolean;
    // private playerContainerInputHandler: EventHook<PlayerContainerInputEvent>;
    onDisabled(): void;
    shouldHandleInputs(key: KeyMapping, screen: Screen | null): boolean;
    shouldHandleInputs(event: KeyEvent): boolean;
}