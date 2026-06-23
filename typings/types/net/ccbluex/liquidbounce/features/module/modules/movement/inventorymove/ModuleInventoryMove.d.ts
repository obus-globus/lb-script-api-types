import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { KeyboardKeyEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/KeyboardKeyEvent.d.ts'
import type { MovementInputEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/MovementInputEvent.d.ts'
import type { PacketEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { ClientModule } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleInventoryMove$Behaviour } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/inventorymove/ModuleInventoryMove$Behaviour.d.ts'
import type { KeyMapping } from '../../../../../../../../net/minecraft/client/KeyMapping.d.ts'
import type { Packet } from '../../../../../../../../net/minecraft/network/protocol/Packet.d.ts'
/**
 * InventoryMove module
 *
 * Allows you to walk while an inventory is opened.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/inventorymove/ModuleInventoryMove.kt#L55 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/inventorymove/ModuleInventoryMove.kt:55}
 */
export class ModuleInventoryMove extends ClientModule {
    static INSTANCE: ModuleInventoryMove;
    // private behavior: ModuleInventoryMove$Behaviour;
    // private /*not mapped: */ getBehavior(): ModuleInventoryMove$Behaviour;
    // private delayedContainerPackets: Packet<any>[];
    /**
     * Restricts user from clicking while moving in inventory.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/inventorymove/ModuleInventoryMove.kt#L86 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/inventorymove/ModuleInventoryMove.kt:86}
     */
    readonly doNotAllowClicking: boolean;
    // private keyHandler: EventHook<KeyboardKeyEvent>;
    // private movementInputHandler: EventHook<MovementInputEvent>;
    // private movementKeys: { [key: string]: any };
    // private packetHandler: EventHook<PacketEvent>;
    // private passthroughSneak: boolean;
    // private /*not mapped: */ getPassthroughSneak(): boolean;
    onDisabled(): void;
    shouldHandleInputs(keyBinding: KeyMapping): boolean;
}