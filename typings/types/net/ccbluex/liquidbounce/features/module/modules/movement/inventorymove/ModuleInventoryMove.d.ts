import type { JavaMap } from '../../../../../../../../JavaMap.d.ts'
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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/7a4298b687df27a16a801d477a542b03917e7306/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/inventorymove/ModuleInventoryMove.kt#L60 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/inventorymove/ModuleInventoryMove.kt:60}
 */
export class ModuleInventoryMove extends ClientModule {
    static INSTANCE: ModuleInventoryMove;
    // private behavior: ModuleInventoryMove$Behaviour;
    // private /*not mapped: */ getBehavior(): ModuleInventoryMove$Behaviour;
    // private delayedContainerPackets: Packet<any>[];
    /**
     * Restricts user from clicking while moving in inventory.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/7a4298b687df27a16a801d477a542b03917e7306/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/inventorymove/ModuleInventoryMove.kt#L95 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/inventorymove/ModuleInventoryMove.kt:95}
     */
    readonly doNotAllowClicking: boolean;
    // private keyHandler: EventHook<KeyboardKeyEvent>;
    // private movementInputHandler: EventHook<MovementInputEvent>;
    // private movementKeys: JavaMap<any, any>;
    // private packetHandler: EventHook<PacketEvent>;
    // private passthroughSneak: boolean;
    // private /*not mapped: */ getPassthroughSneak(): boolean;
    /**
     * Whether SnapTap (and similar movement modules) should allow their input
     * overrides when a screen is open. True only when InventoryMove is enabled
     * and in NORMAL mode (free movement in inventory).
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/7a4298b687df27a16a801d477a542b03917e7306/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/inventorymove/ModuleInventoryMove.kt#L69 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/inventorymove/ModuleInventoryMove.kt:69}
     */
    allowsMovementOverride(): boolean;
    onDisabled(): void;
    shouldHandleInputs(keyBinding: KeyMapping): boolean;
}